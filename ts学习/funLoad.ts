// interface SetPoint {
//   dd:(x: number, y: number)=> void;
//   setdd(x:number);
// }
// const a:SetPoint={
//   dd:(x):void=>{ },
//   setdd:(x)=>{}
// }


// type PartialPointX = { x: number; };
// interface Point extends PartialPointX{

// }

interface Point {
  x: number;
  y: number;
}

class SomePoint implements Point {
  x = 1;
}