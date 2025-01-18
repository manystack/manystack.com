import Image from "next/image";
import ProjectIllustration from "@/app/components/ProjectIllustration";

const Diobox = () => {
  return (
    <div className="container flex flex-col gap-8 text-gray-700">
      <h1 className="text-3xl">Recruiterly: Transforming Recruitment with Manystack’s Expertise</h1>
      <section className="flex flex-col gap-8">
        <h2 className="text-2xl">Client Overview</h2>
        <p className="text-lg">
          In the bustling world of recruitment, where every connection counts and every second saved matters, Recruiterly sought to become a beacon of efficiency, transparency, and trust. But turning this vision into reality required not just a development partner, but a team that understood the intricate dance of innovation and functionality. Enter Manystack.
        </p>
      </section>
      <section className="flex flex-col gap-8">
        <h2 className="text-2xl">The Challenge</h2>
        <p className="text-lg">
          Recruiterly wanted a platform that would redefine how recruitment agencies and job seekers interact. They envisioned a dynamic space where employers could manage job posts effortlessly, recruiters could build their reputations through transparent reviews, and hiring decisions could be data-driven with robust fee statistics. They also needed seamless scheduling for recruiters to amplify their reach with planned posts. The challenge was not just to build a platform but to craft an ecosystem that was intuitive, scalable, and powerful.
        </p>
      </section>
      <section className="flex flex-col gap-8">
        <h2 className="text-2xl">The Journey</h2>
        <p className="text-lg">
          At Manystack, we knew this wasn’t just about writing code—it was about creating a story. A story where recruiters and employers found common ground in a platform that empowered them both. Our tech stack was the pen, and Symphony, React, ElasticSearch, and PostgreSQL were the ink we used to write it.
        </p>
        <div>
          <h3 className="text-xl">1. Fee Statistics: The Data Detective</h3>
          <ProjectIllustration src="/illustrations/recruiterly/fee-statistics.jpg" title="Drag-and-Drop Guest Seating" />
          <p className="text-lg">
            We understood that recruiters needed insights, not just numbers. With PostgreSQL as the backbone, we crafted an intelligent fee statistics module that turned data into actionable insights. The result? Recruiters could analyze trends and make decisions backed by data, ensuring they stayed ahead of the competition.
          </p>
        </div>
        <div>
          <h3 className="text-xl">2. Job Posts: The Gateway to Opportunities</h3>
          <ProjectIllustration src="/illustrations/recruiterly/job-posts.jpg" title="Job Posts" />
          <p className="text-lg">
            Job postings were more than listings; they were the first handshake between recruiters and candidates. With React and ElasticSearch, we brought speed and precision to the forefront. Recruiters could create, edit, and manage job posts in a flash, while ElasticSearch ensured they could find exactly what they were looking for—every time.
          </p>
        </div>
        <div>
          <h3 className="text-xl">3. Recruiter Reviews: Building Trust Through Transparency</h3>
          <ProjectIllustration src="/illustrations/recruiterly/scheduled-posts.jpg" title="Scheduled Posts" />
          <p className="text-lg">
            In the recruitment world, trust is currency. We built a reviews feature that allowed recruiters to showcase their strengths and employers to make informed choices. A robust system crafted with Symphony ensured reviews were authentic, detailed, and easy to navigate, giving every recruiter a fair chance to shine.
          </p>
        </div>
        <div>
          <h3 className="text-xl">4. Scheduled Posts: Planning for Success</h3>
          <ProjectIllustration src="/illustrations/recruiterly/scheduled-posts.jpg" title="Scheduled Posts" />
          <p className="text-lg">
            Time is a recruiter’s most valuable asset. The scheduled posts feature, powered by React’s dynamic front-end and PostgreSQL’s reliable data handling, allowed recruiters to plan their outreach in advance. Whether it was a job post or an update, the platform ensured the right message reached the right audience at the perfect moment.
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-8">
        <h2 className="text-2xl">The Technology Behind the Magic</h2>
        <ul className="list-disc pl-5 text-lg">
          <li><strong>Symphony:</strong> The backbone of our development, providing a structured and scalable framework.</li>
          <li><strong>React:</strong> The dynamic, user-friendly face of the platform, ensuring a seamless user experience..</li>
          <li><strong>ElasticSearch:</strong> Lightning-fast search capabilities that brought precision to every query.</li>
          <li><strong>PostgreSQL:</strong> The reliable database that handled complex data with ease and ensured scalability.</li>
        </ul>
      </section>
      <section className="flex flex-col gap-8">
        <h2 className="text-2xl ">The Outcome</h2>
        <p className="text-lg">
          With Manystack’s expertise, Recruiterly transformed into more than just a platform—it became a bridge between recruiters and employers, built on trust, efficiency, and innovation. The four core features—Fee Statistics, Job Posts, Recruiter Reviews, and Scheduled Posts—worked in harmony to create an intuitive and powerful user experience.
        </p>
        <p className="text-lg">
          As Recruiterly continues to grow, the story of their success is one we are proud to have co-authored. At Manystack, we don’t just build platforms; we build futures, one innovative feature at a time.
        </p>
        <p className="text-lg">
          This is the story of Recruiterly, and we’re thrilled to have played a part in its narrative.
        </p>
      </section>
    </div>
  )
}

export default Diobox
