import TestimonialCard from "./TestimonialCard";

const graduateTestimonials = [
  {
    name: "Jane Smith",
    role: "Software Developer",
    company: "",
    rating: 5,
    quote:
      "Next Wave Dev gave me the confidence to apply for real developer roles. The hands-on projects and mentorship helped me build the skills employers are looking for."
  }
];

const companyTestimonials = [
  {
    name: "Mark Lee",
    role: "Hiring Manager",
    company: "Startup Labs",
    rating: 5,
    quote:
      "The graduates from Next Wave Dev stand out because they have practical experience and strong problem-solving skills. They are ready to contribute from day one."
  }
];

export default function TestimonialsSection({ type }) {

  let testimonials = [];

  if (type === "graduates") {
    testimonials = graduateTestimonials;
  } else if (type === "companies") {
    testimonials = companyTestimonials;
  } else {
    testimonials = [...graduateTestimonials, ...companyTestimonials];
  }

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>

      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </div>
    </section>
  );
}