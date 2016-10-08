export default function without(obj, props) {
  const ret = {};
  for (const key of Object.keys(obj)) {
    if (props.indexOf(key) === -1) {
      ret[key] = obj[key];
    }
  }
  return ret;
}
