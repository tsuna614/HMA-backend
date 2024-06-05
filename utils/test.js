const fs = require("node:fs/promises");

async function prependToFile(filePath, content) {
  try {
    let existingContent;
    try {
      existingContent = await fs.readFile(filePath, "utf-8");
    } catch (err) {
      if (err.code === "ENOENT") {
        await fs.writeFile(filePath, "", "utf-8");
      }
    }
    const newContent =
      existingContent == undefined ? content : content + "\n" + existingContent;
    await fs.writeFile(filePath, newContent, "utf-8");
    console.log("Content prepended successfully!");
  } catch (err) {
    console.error("Error prepending to file:", err);
  }
}

module.exports = { prependToFile };
