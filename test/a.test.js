
function fetchData(callback) {
    setTimeout(() => {
        callback("peanut butter");
    }, 2000);
}

test("the data is peanut butter", (done) => {
    function callback(data) {
        expect(data).toBe("peanut butter");
        done();
    }
    fetchData(callback);
});
