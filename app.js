

const profileDataArgs = process.argv.slice(2, process.argv.length);


const printProfiledata = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i++) {
    console.log(profileDataArr[i]);
}
};

printProfiledata(profileDataArgs);