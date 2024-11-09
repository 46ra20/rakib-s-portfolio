// import SendIcon from "@mui/icons-material/Send";
// import emailjs from '@emailjs/browser';
import { useRef } from "react";
// import SendIco
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
// import emailjs from '@ema'
import { IoSendSharp } from "react-icons/io5";


const ContactWithMe = () => {

  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)
    console.log(form.current)
    const frm = new FormData(event.target)
    fetch('https://drf-online-school-jsrn-getm.vercel.app/contact_us/',{
      method:'POST',
      body:frm
    })
    .then(res=>res.json())
    .then(data=>{
      if(data){
        console.log(data)
        toast('Your Massage Send Successfully.', {
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  });
      }
      event.target.reset()
    })
    .catch(err=>{
      if(err){
        console.log(err)
        toast('Sorry Massage Can not send Try agin.!', {
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  });
      }
      event.target.reset()
    })


    // e.preventDefault();

    // emailjs.sendForm('service_hbo3f7b', 'template_93q1e2q', form.current, 'x1XcfnRc9eSAmYC7V')
    //   .then((result) => {
    //       console.log(result)
    //       toast('Your Massage Send Successfully.', {
    //         position: "bottom-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //         });
            
    //       e.target.reset();
    //   }, (error) => {
    //       console.log(error.text);
    //       toast('Sorry Massage Can not send Try agin.!', {
    //         position: "bottom-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //         });
            
    //   });
  };

  return (
    <div className="" id="contact-with-me">
      <div>
        <h2 className="divider mb-8 text-3xl font-bold">Contact With Me</h2>
      </div>
      <div className="mx-3 md:mx-auto md:w-1/2 lg:1/4 bg-gray-400 p-10 rounded">
        <form ref={form} onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name:</label>
          <input name="name" placeholder="Your name" className="input input-md w-full my-3" type={'text'} required></input>
          <label htmlFor="email">Your email:</label>
          <input name="email" placeholder="Your email" className="input input-md w-full my-3" type={'email'} required></input>
          <label htmlFor="name">Subject:</label>
          <input name="subject" placeholder="Subject" className="input input-md w-full my-3" type={'text'} required></input>
          <label htmlFor="name">Massages:</label>
          <textarea name="massage" placeholder="Massages" className="textarea w-full my-3" type={'text'} required></textarea>
          <button className="btn btn-accent btn-md text-bold">Send your Massages <IoSendSharp/> </button>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
}
export default ContactWithMe;
