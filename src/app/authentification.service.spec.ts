import { AuthentificationService } from './authentification.service';

let service;
describe('AuthentificationService', () => {
  beforeEach(() => {
      service = new AuthentificationService();
    }
  );
  afterEach(() => {
    localStorage.removeItem('user');
  }
  );
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('it should return true if there is a user in the localStorage ', () => {
      localStorage.setItem('user', 'aymen');
      expect(service.isAuthentified()).toBeTruthy();
    }
  );
  it('it should return false if there is not a user in the localStorage ', () => {
      expect(service.isAuthentified()).toBeFalsy();
    }
  );
});

