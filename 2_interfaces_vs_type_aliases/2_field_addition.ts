// For Types, new fields cannot be added to the type 
// once they have been declared

type TwoWheelerType = {
  make: string;
};

// type BikeType={
//     model:number;
// }

// But in case of interface addition of new fields
// after declaration is possible

interface BikeInterface {
  make: string;
}

interface BikeInterface{
    model:number;
}