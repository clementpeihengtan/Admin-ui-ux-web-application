describe('Charts Test Suit', function() {
    it('has a dummy spec to test 2 + 2', function() {
        expect(2+2).toEqual(4);
    });
    var Data;

    var datalist = [
        {
            "name" : "Node 1",
            "mark" : 80,
            "average" : 6,
            "capacity" : 70
        },
        {
            "name" : "Node 2",
            "mark" : 70,
            "average" : 5,
            "capacity" : 80
        },
        {
            "name" : "Node 4",
            "mark" : 60,
            "average" : 9,
            "capacity" : 20
        },
        {
            "name" : "Node 5",
            "mark" : 20,
            "average" : 5,
            "capacity" : 30
        }
    ];

    beforeEach(module('ui.router'));
    beforeEach(angular.mock.module('components.charts'));

    beforeEach(inject(function(_Data_){
        Data = _Data_;
    }));

    describe('.all()', function() {
        it('Data should exist', function() {
            expect(Data.all).toBeDefined();
        });

        it('should return a hard coded list of data', function() {
            expect(Data.all()).toEqual(datalist);
        });
    })

});