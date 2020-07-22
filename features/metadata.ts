import "reflect-metadata";

@controller
class Plane {
  color: string = "red";

  @get("/login")
  fly(): void {
    console.log("vrrrrrrr");
  }
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata("path", target.prototype, key);
    console.log(path);
  }
}

function get(secretInfo: string) {
  return function (target: Plane, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata("path", secretInfo, target, key);
  };
}

// const secret = Reflect.getMetadata("path", Plane.prototype, "fly");
// console.log(secret);
