const excel = require("node-excel-export");

const update = async (req, res) => {
  console.log(req.query.id);

  const data = JSON.parse(req.query.id);

  // You can define styles as json object
  const styles = {
    headerDark: {
      fill: {
        fgColor: {
          rgb: "FF000000",
        },
      },
      font: {
        color: {
          rgb: "FFFFFFFF",
        },
        sz: 14,
        bold: true,
        underline: true,
      },
    },
    cellPink: {
      fill: {
        fgColor: {
          rgb: "FFFFCCFF",
        },
      },
    },
    cellGreen: {
      fill: {
        fgColor: {
          rgb: "FF00FF00",
        },
      },
    },
  };

  //Array of objects representing heading rows (very top)
  const heading = [["Inventory List E2E"]];

  //Here you specify the export structure
  const specification = {
    forReoder: {
      // <- the key should match the actual data key
      displayName: "For Reorder", // <- Here you specify the column header
      headerStyle: styles.headerDark, // <- Header style
      width: 120, // <- width in pixels
    },
    inventoryID: {
      displayName: "Inventory ID",
      headerStyle: styles.headerDark,
      width: "10", // <- width in chars (when the number is passed as string)
    },
    projectName: {
      displayName: "project name",
      headerStyle: styles.headerDark,
      width: 220, // <- width in pixels
    },

    projectDescription: {
      // <- the key should match the actual data key
      displayName: "project description", // <- Here you specify the column header
      headerStyle: styles.headerDark, // <- Header style
      width: 120, // <- width in pixels
    },
    workID: {
      displayName: "Work ID",
      headerStyle: styles.headerDark,
      width: "10", // <- width in chars (when the number is passed as string)
    },
    plasmidQuantity: {
      displayName: "Plasmid quantity (mg)",
      headerStyle: styles.headerDark,
      width: 220, // <- width in pixels
    },
    linearDnaQuantity: {
      displayName: "Linear DNA quantity (mg)",
      headerStyle: styles.headerDark,
      width: 220, // <- width in pixels
    },

    quantityOfRna: {
      // <- the key should match the actual data key
      displayName: "Quantity of RNA (mg)", // <- Here you specify the column header
      headerStyle: styles.headerDark, // <- Header style
      width: 120, // <- width in pixels
    },
    needForMutagenesis: {
      displayName: "need for mutagenesis",
      headerStyle: styles.headerDark,
      width: "10", // <- width in chars (when the number is passed as string)
    },
    polyATailing: {
      displayName: "poly a tailing",
      headerStyle: styles.headerDark,
      width: 220, // <- width in pixels
    },

    tailedWithPoly: {
      // <- the key should match the actual data key
      displayName: "tailed with poly (A)", // <- Here you specify the column header
      headerStyle: styles.headerDark, // <- Header style
      width: 120, // <- width in pixels
    },
    pasmidID: {
      displayName: "Pasmid ID",
      headerStyle: styles.headerDark,
      width: "10", // <- width in chars (when the number is passed as string)
    },
    linID: {
      displayName: "Lin-ID",
      headerStyle: styles.headerDark,
      width: 220, // <- width in pixels
    },

    rnaID: {
      // <- the key should match the actual data key
      displayName: "RNA-ID", // <- Here you specify the column header
      headerStyle: styles.headerDark, // <- Header style
      width: 120, // <- width in pixels
    },
    projectStartDate: {
      displayName: "project start date",
      headerStyle: styles.headerDark,
      width: "10", // <- width in chars (when the number is passed as string)
    },
    plasmidBarcod: {
      displayName: "plasmid-Barcod",
      headerStyle: styles.headerDark,
      width: 220, // <- width in pixels
    },
  };

  function createData(
    forReoder,
    inventoryID,
    projectName,
    projectDescription,
    workID,
    plasmidQuantity,
    linearDnaQuantity,
    quantityOfRna,
    needForMutagenesis,
    polyATailing,
    tailedWithPoly,
    pasmidID,
    linID,
    rnaID,
    projectStartDate,
    plasmidBarcod
  ) {
    return {
      forReoder,
      inventoryID,
      projectName,
      projectDescription,
      workID,
      plasmidQuantity,
      linearDnaQuantity,
      quantityOfRna,
      needForMutagenesis,
      polyATailing,
      tailedWithPoly,
      pasmidID,
      linID,
      rnaID,
      projectStartDate,
      plasmidBarcod,
    };
  }
  // The data set should have the following shape (Array of Objects)
  // The order of the keys is irrelevant, it is also irrelevant if the
  // dataset contains more fields as the report is build based on the
  // specification provided above. But you should have all the fields
  // that are listed in the report specification
  const dataset = [
    {
      customer_name: "IBM",
      status_id: 1,
      note: "some note",
      misc: "not shown",
    },
    { customer_name: "HP", status_id: 0, note: "some note" },
    { customer_name: "MS", status_id: 0, note: "some note", misc: "not shown" },
  ];

  // Define an array of merges. 1-1 = A:1
  // The merges are independent of the data.
  // A merge will overwrite all data _not_ in the top-left cell.
  const merges = [
    { start: { row: 1, column: 1 }, end: { row: 1, column: 10 } },
    { start: { row: 2, column: 1 }, end: { row: 2, column: 5 } },
    { start: { row: 2, column: 6 }, end: { row: 2, column: 10 } },
  ];

  // Create the excel report.
  // This function will return Buffer
  const report = excel.buildExport([
    // <- Notice that this is an array. Pass multiple sheets to create multi sheet report
    {
      name: "Report", // <- Specify sheet name (optional)
      // heading: heading, // <- Raw heading array (optional)
      //merges: merges, // <- Merge cell ranges
      specification: specification, // <- Report specification
      data: data, // <-- Report data
    },
  ]);

  // You can then return this straight
  res.attachment("E2E_database.xlsx"); // This is sails.js specific (in general you need to set headers)
  return res.send(report);
};
module.exports = update;
