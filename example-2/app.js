const { characters, stealRing } = require("./characters");

stealRing(characters, "Frodo");
for (const c of characters) {
    console.log(c);
}
