export default class PhotoService {

  constructor(resource) {
    this._resource = resource('v1/fotos{/id}');
  }

  getPhotos() {
    return this._resource
      .query()
      .then(res => res.json());
  }

  registerPhoto(photo) {
    return this._resource
      .save(photo);
  }

  deletePhoto(id) {
    return this._resource.delete({ id });
  }
}