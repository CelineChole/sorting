describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles an array with one element', function(){
        expect( bubbleSort(['x']) ).toEqual( ['x'] );
    });

    it('handles multiple elements', function(){
        const arr = [2, 6, 20, 1];
        const sortedArray = [1, 2, 6, 20];

        
        expect( bubbleSort(arr).toEqual( sortedArray ));
        expect( bubbleSort(sortedArray[0]).toBeLessThan( bubbleSort(sortedArray[3])))
    });
});
