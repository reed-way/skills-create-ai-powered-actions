
const { rateJoke } = require("./rateJoke");
const core = require("@actions/core");

async function run() {

    const joke = core.getInput("joke", { required: true });
    const token = core.getInput("token", { required: true });

    const rating = await rateJoke(joke, token);
    core.setOutput("result", rating);
}

module.exports = { run };