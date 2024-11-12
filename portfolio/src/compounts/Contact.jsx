import axios from 'axios';
import {useForm} from 'react-hook-form'
import toast from 'react-hot-toast';


function Contact() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const userInfo={
      name:data.name,
      email:data.email,
      messagae:data.messagae
    }
    try{
     await axios.post("https://getform.io/f/ayvpnyjb",userInfo)
     toast.success("your message  has been send")

    }catch(error){
      console.log(error);
      toast.error("Something went wrong")
      

    }
  };
  
  return (
    <>
    <div 
    name="Contacts"
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
            <form 
            //action="https://getform.io/f/ayvpnyjb" 
            onSubmit={handleSubmit(onSubmit)}
           // method="POST"
            className="bg-slate-400  w-96 px-8 py-6 rounded-xl">
               <h1 className="text-xl">Send Your Message</h1> 
               <div className="flex flex-col mb-4">
               <label className="block text-gray-700">Full Name</label>
               <input 
               {...register("name",{required:true})}
               name="name"
               className=" shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-out;line"
               id="name"
               type="text"
               placeholder="Enter name"
               >

               </input>
               {errors.name && <span>This field is required</span>}

               </div>  

               <div className="flex flex-col mb-4">
               <label className="block text-gray-700">Email Address </label>
               <input 
                              {...register("email",{required:true})}

                              name="email"

               className=" shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-out;line"
               id="name"
               type="text"
               placeholder="Enter email"
               >

               </input>
               {errors.email && <span>This field is required</span>}

               </div> 


               <div className="flex flex-col mb-4">
               <label className="block text-gray-700">Message</label>
               <textarea 
                                {...register("message",{required:true})}

               className=" shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-out;line"
               name="message"

                id="name"
                type="text"
                placeholder="Enter message"
               >

               </textarea>
               {errors.messagae && <span>This field is required</span>}


               </div> 
               <button
               type="submit"
                className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300">Send </button>
            </form>
        </div>
    </div>

    </>
  )
}

export default Contact