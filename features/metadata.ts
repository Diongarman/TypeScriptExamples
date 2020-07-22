import "reflect-metadata";

@controller
class Plane {
  color: string = "red";

  @get("/login")
  fly(): void {
    console.log("vrrrrrrr");
  }
}

//uses metadata to wire up router
function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata("path", target.prototype, key);
    console.log(path);
  }
}

//adds metadata
function get(path: string) {
  return function (target: Plane, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata("path", path, target, key);
  };
}

// const secret = Reflect.getMetadata("path", Plane.prototype, "fly");
// console.log(secret);
