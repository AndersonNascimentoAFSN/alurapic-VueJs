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
    if (photo._id) {
      return this._resource
        .update({ id: photo._id }, photo)
    } else {
      return this._resource
        .save(photo);
    }
  }

  deletePhoto(id) {
    return this._resource.delete({ id });
  }

  getPhotoById(id) {
    return this._resource.get({ id })
      .then(res => res.json());
  }
}