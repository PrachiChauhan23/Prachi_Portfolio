import ContactForm from "../components/ContactForm";
export default function ContactPage() {
    return (
        <section className="w-full  mx-auto px-4 sm:px-6 lg:px-8 py-18 [background-color:#f5f5f5]">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 text-gray-900 font-headline">
                    Contact Me
                </h1>
                <p className="text-xl text-gray-600 ">
                    Have a question, a project proposal, or just want to say hi? I&apos;d love to hear from you!
                </p>
            </div>
            <ContactForm />
        </section>
    );
}
