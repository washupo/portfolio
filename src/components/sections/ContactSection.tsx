// ContactSection component
import { useState } from "react"
import axios from "axios";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

export interface ContactSectionProps {
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    object: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/send-email", formData);
      alert("Votre email à été envoyé avec succès!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("😬🫣 Une erreur s'est produite lors de l'envoi de l'email. 😳🤯 \n Veuillez réessayer plus tard, ou contactez moi directement à l'adresse suivante: paulinewashukenyi@gmail.com 😊");
    }
  };
  return (
    <section className="section4 h-[90vh] pt-8 flex justify-center items-center scroll-mt-[10vh] snap-start">
      <article className="w-[90%] h-[90%] relative flex justify-center items-center">
          <SectionTitle title="Contact" color="bg-orange-700" className="absolute -top-10 fade" />
          <form
            className="w-full h-full border-2 border-slate-950 rounded-sm p-6 pt-16 fade"
            onSubmit={handleSubmit}
          >
            <div className="h-full flex flex-col">
              <div className="flex flex-col md:grid md:grid-cols-3 gap-4 h-full">
                <div className="flex flex-col gap-4 md:justify-center md:col-start-1">
                  <span className="flex flex-col gap-2 ">
                    <label
                      htmlFor="name">Nom</label>
                    <input
                      type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                      className="border-2 border-black p-1 h-8"
                    />
                  </span>
                  <span className="flex flex-col gap-2 ">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                      className="border-2 border-black p-1 h-8"
                    />
                  </span>
                </div>

                <div className="flex flex-col gap-4 md:justify-center md:col-start-2 md:col-span-2 h-full">
                  <span className="flex flex-col gap-2">
                    <label htmlFor="object">Objet</label>
                    <input
                      type="text" id="object" name="object" value={formData.object} onChange={handleChange}
                      className="border-2 border-black p-1 h-8"
                    />
                  </span>
                  <span className="flex flex-col gap-2 h-full">
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message" id="message" value={formData.message} onChange={handleChange}
                      className="border-2 border-black p-1 h-full"
                    />
                  </span>
                </div>
              </div>

              <div className="pt-4 md:col-span-3 flex justify-center items-center w-full">
                <Button text="Envoyer" color="orange" />
              </div>
            </div>

          </form>
      </article>
    </section>
  );
}
