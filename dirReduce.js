function arrayEquals(a, b) {
  if (a.length != b.length) {
    return false;
  }
  for(let i=0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

function dirReduce(arr) {
  let before = [...arr];
  let opposite = {"NORTH":"SOUTH", "EAST":"WEST", "SOUTH":"NORTH", "WEST": "EAST"};
  for(;;) {
    let after = before.reduce((acc, dir) => {
      if (acc.length == 0) {
        return [dir];
      } else if (acc[acc.length-1] === opposite[dir]) {
        acc.pop();
        return acc;
      } else {
        acc.push(dir);
        return acc;
      }
    }, []);
    //console.log("before " + before.join(",") + " after " + after.join(","));
    if (arrayEquals(before, after)) {
      return before;
    }
    before = after;
  }
}

module.exports = {dirReduce};