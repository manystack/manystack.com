import ProjectIllustration from "@/app/components/ProjectIllustration"

const Diobox = () => {
  return (
    <div className="container flex flex-col gap-8 text-gray-700">
      <h1 className="text-3xl">Diobox: Transforming Event Management with Modern Web Development</h1>
      <section className="flex flex-col gap-8">
        <h2 className="text-2xl">Client Overview</h2>
        <p className="text-lg">
          Diobox is a leading platform in the event management industry, offering a comprehensive suite of tools for
          organizing, managing, and executing events of all sizes. With a focus on delivering top-tier services to event
          planners and hosts, Diobox required a complete overhaul of their legacy frontend and the addition of new,
          innovative features to meet the growing demands of their clients.
        </p>
      </section>
      <section className="flex flex-col gap-8">
        <h2 className="text-2xl">Project Scope</h2>
        <p className="text-lg">
          Manystack was engaged by Diobox to modernize their web application, starting with replacing their outdated
          Angular frontend with a sleek, efficient React implementation. The goal was not just to refresh the user
          interface, but to enhance functionality, user experience, and overall performance—ensuring Diobox remains at
          the forefront of event management technology.
        </p>
      </section>
      <section className="flex flex-col gap-8">
        <h2 className="text-2xl">Our Contributions</h2>
        <div>
          <h3 className="text-xl">1. Modern Frontend Overhaul</h3>
          <p className="text-lg">
            We replaced the legacy Angular frontend with a robust React implementation. Leveraging the latest
            technologies, we ensured that the new frontend is not only faster and more responsive but also scalable and
            easier to maintain. The modernized interface now offers a seamless user experience that aligns with the high
            standards of Diobox&apos;s brand.
          </p>
        </div>
        <div>
          <h3 className="text-xl">2. Visual Email Builder</h3>
          <ProjectIllustration src="/illustrations/diobox/email-builder.gif" title="Visual Email Builder" />
          <p className="text-lg">
            To enhance Diobox&apos;s communication tools, we developed a Visual Email Builder. This feature allows users to
            create professional-grade emails through a simple drag-and-drop interface, without the need for any coding
            knowledge. This tool empowers event organizers to design and send beautifully crafted emails, ensuring their
            communications are as polished as their events.
          </p>
        </div>
        <div>
          <h3 className="text-xl">3. Drag-and-Drop Guest Seating</h3>
          <ProjectIllustration src="/illustrations/diobox/seating.gif" title="Drag-and-Drop Guest Seating" />
          <p className="text-lg">
            We introduced a drag-and-drop interface for managing guest tables and seating arrangements. This feature
            provides event planners with an intuitive way to organize seating, making the complex task of event setup
            easier and more visual. Users can now easily adjust seating arrangements on the fly, ensuring every detail
            of the event is meticulously planned.
          </p>
        </div>
        <div>
          <h3 className="text-xl">4. Customizable Form Builder</h3>
          <ProjectIllustration src="/illustrations/diobox/form-builder.gif" title="Customizable Form Builder" />
          <p className="text-lg">
            We developed a highly customizable form builder for RSVP, Registration, and Survey forms. This tool allows
            users to create forms tailored to their specific needs, whether it’s collecting RSVPs, gathering guest
            information, or conducting post-event surveys. The forms can be sent via email, shared through a link, or
            embedded directly into websites, providing maximum flexibility for event organizers.
          </p>
        </div>
        <div>
          <h3 className="text-xl">5. Guest Check-In and Ticketing</h3>
          <ProjectIllustration src="/illustrations/diobox/guest-check-in-ticketing.gif" title="Guest Check-In and Ticketing" />
          <p className="text-lg">
            To streamline event day operations, we implemented a guest check-in functionality and an integrated
            ticketing system. These features ensure a smooth and professional experience for both event hosts and
            attendees. The check-in process is quick and efficient, reducing wait times and enhancing the overall guest
            experience.
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-8">
        <h2 className="text-2xl">Technologies Used</h2>
        <ul className="list-disc pl-5 text-lg">
          <li><strong>Netlify</strong> for continuous deployment and hosting, ensuring a seamless, reliable experience
            for Diobox users.
          </li>
          <li><strong>CircleCI</strong> for automating the build, test, and deployment processes, allowing for rapid
            iteration and deployment of new features.
          </li>
          <li><strong>Cypress</strong> for end-to-end testing, providing comprehensive test coverage and ensuring every
            user interaction is thoroughly validated.
          </li>
          <li><strong>Jest & Vitest</strong> for rigorous testing, guaranteeing that every feature works flawlessly
            under all conditions.
          </li>
          <li><strong>Vite</strong> as a next-generation front-end build tool, speeding up development and providing an
            ultra-fast environment for building the new Diobox frontend.
          </li>
          <li><strong>ChakraUI</strong> for creating a modern, accessible, and highly responsive user interface that
            enhances the overall user experience.
          </li>
        </ul>
      </section>
      <section className="flex flex-col gap-8">
        <h2 className="text-2xl ">The Result</h2>
        <p className="text-lg">
          With Manystack&apos;s expertise, Diobox has transformed into a state-of-the-art event management platform that
          stands out in a competitive market. The new features have not only improved the user experience but also
          significantly increased Diobox&apos;s operational efficiency and client satisfaction. The successful collaboration
          between Diobox and Manystack is a testament to our commitment to quality, innovation, and delivering solutions
          that exceed expectations.
        </p>
      </section>
    </div>
  )
}

export default Diobox
