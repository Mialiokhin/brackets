module.exports =
    function check(str, bracketsConfig) {
        let checkStr = str
        let checkIsLoopFalse = checkStr;
        let counter = 0;
        do {
            for (el of bracketsConfig) {
                for (let i = 0; i < checkStr.length; i++) {
                    checkStr = checkStr.replace(`${el[0] + el[1]}`, '');
                    (checkIsLoopFalse !== checkStr) ? checkIsLoopFalse = checkStr : counter++;
                }
            }
        } while (checkStr.length !== 0 && counter < 1000)
        return (checkStr.length === 0)
    }


