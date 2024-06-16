const jsonfile = require("jsonfile");

const moment = require("moment");

const simpleGit = require("simple-git");

const FILE_PATH = "./data.json";


// const git: SimpleGit = simpleGit('https://github.com/iamrohitagg/GitHub_Graph.git');


const makeCommit = (n) => {
  if (n === 0) return simpleGit().push();
  const x = Math.random(0, 54);
  const y = Math.random(0, 6);
  const DATE = moment().subtract(0.1, "y").add(20, "d").add(x, "w").add(y, "d").format();
  console.log(DATE);
  const data = {
    date:DATE
  }
  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit().add([FILE_PATH]).commit(DATE, { "--date": DATE }, makeCommit.bind(this, --n)).push();
  });
};

makeCommit(4);
