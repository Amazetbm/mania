'use strict';

describe('Service: MoviesService', function () {

  // load the service's module
  beforeEach(module('movieManiaApp'));

  // instantiate service
  var MoviesService;
  beforeEach(inject(function (_MoviesService_) {
    MoviesService = _MoviesService_;
  }));

  it('should do something', function () {
    expect(!!MoviesService).toBe(true);
  });

});
