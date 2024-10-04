import Image from "next/image";
import ProjectIllustration from "@/app/components/ProjectIllustration";

const Diobox = () => {
  return (
    <div className="container flex flex-col gap-8 text-gray-700">
      <h1 className="text-3xl">Recruiterly</h1>
      <section className="flex flex-col gap-8">
        <div>
          <ProjectIllustration src="/illustrations/recruiterly/fee-statistics.jpg" title="Drag-and-Drop Guest Seating" />
          <ProjectIllustration src="/illustrations/recruiterly/job-posts.jpg" title="Job Posts" />
          <ProjectIllustration src="/illustrations/recruiterly/reviews-summary.jpg" title="Reviews Summary" />
          <ProjectIllustration src="/illustrations/recruiterly/scheduled-posts.jpg" title="Scheduled Posts" />
        </div>
      </section>
    </div>
  )
}

export default Diobox
