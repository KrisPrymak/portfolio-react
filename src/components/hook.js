function findVowels(string) {
    const result = 0;
    const temp = 'aeiou'
    for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (temp[i] === string[j])
                result++;
        }
    }

    return result
}