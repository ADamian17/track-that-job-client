export default function validateHandler(handler: unknown) {
  if (typeof handler !== "function") {
    throw new Error(
      `Expect event handler to be a function but got ${typeof handler}`
    );
  }
}
