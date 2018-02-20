describe("foo", function () {
    it("bars", function () {
        var el = document.createElement('div');
        el.id = '#test';
        document.body.appendChild(el);
        el.innerText = 'testing';
        expect(document.body.innerText).toContain('testing');
    })
});