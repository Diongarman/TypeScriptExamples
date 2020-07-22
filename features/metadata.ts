import "reflect-metadata";

//@controller
class Plane {
  color: string = "red";

  @get("/login")
  fly(): void {
    console.log("vrrrrrrr");
  }
}

// function controller(target: Plane){

// }

function get(metadataKey: string) {
  return function (target: Plane, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(metadataKey, "some secret", target, key);
  };
}

const secret = Reflect.getMetadata("/login", Plane.prototype, "fly");
console.log(secret);
