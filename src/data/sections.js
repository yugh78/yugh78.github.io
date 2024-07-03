import ProjectsSection from '@/components/ProjectsSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import SummarySection from '@/components/SummarySection.vue'

export default {
  SECTIONS: [
    { id: 'summary-section', component: SummarySection },
    { id: 'skills-section', component: SkillsSection },
    { id: 'project-section', component: ProjectsSection }
  ]
}
