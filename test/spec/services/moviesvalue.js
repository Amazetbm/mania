'use strict';

describe('Service: MoviesValue', function () {

  // load the service's module
  beforeEach(module('movieManiaApp'));

  // instantiate service
  var MoviesValue;
  beforeEach(inject(function (_MoviesValue_) {
    MoviesValue = _MoviesValue_;
  }));

  it('should do something', function () {
    expect(!!MoviesValue).toBe(true);
  });

});
