import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const ProductModal = ({pCategory, setPCategory}) => {
    const {user, loading} = useContext(AuthContext)
    const {companyName, resellPrice} = pCategory
    const handleModal = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.resellPrice.value;
        const number = form.number.value;

        const carBooking ={
            car:companyName,
            name,
            email,
            price,
            phone:number
        }
      //   fetch('https://b612-used-products-resale-server-side-islammd39.vercel.app/bookings', {
      //     method: 'POST',
      //     headers: {
      //         'content-type': 'application/json'
      //     },
      //     body: JSON.stringify(carBooking)
      // })
      //     .then(res => res.json())
      //     .then(data => {
      //         console.log(data);
      //         if(loading){
      //           <p>loading ....</p>
      //         }
      //         if (data.acknowledged) {
      //             toast.success('Booking confirmed');
      //           }
      //           else{
      //             toast.error(data.message);
      //           }
      //         })
              console.log(carBooking);
              setPCategory(null)

    }
    return (
        <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-2xl text-center font-bold text-primary">
            {companyName}
            </h3>
            <form onSubmit={handleModal} className="mt-3">
              <input
                name="name"
                type="text"
                defaultValue={user?.displayName}
                readOnly
                placeholder="name"
                className="input input-bordered w-full my-2"
              />
              <input
                name="email"
                type="email"
                defaultValue={user?.email}  
                readOnly
                placeholder="your email"
                className="input input-bordered w-full my-2"
              />
                <input
                  name="resellPrice"
                  type="text"
                  readOnly
                  defaultValue={resellPrice}
                  placeholder="Price"
                  className="input input-bordered w-full my-2"
                />
              <input
                name="number"
                type="text"
                placeholder="Your phone number"
                className="input input-bordered w-full my-2"
              />
              <input
                type="submit"
                className="btn btn-primary input input-bordered w-full mt-2"
              />
            </form>
          </div>
        </div>
      </>
    );
};

export default ProductModal;