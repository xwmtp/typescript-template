describe("test", () => {

    const response = require('./mocks/mockResponse.json');

    it("returns correct response", () => {
        expect(response.status).toBe(200);
        expect(response.message).toBe('test123');
    })
})
