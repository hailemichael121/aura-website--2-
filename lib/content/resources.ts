export type ResourceArticle = {
  id: number
  title: string
  excerpt: string
  category: string
  readTime: string
  author: string
  publishedAt: string
  tags: string[]
  featured: boolean
  content: string[]
}

export type ResourcePodcast = {
  id: number
  title: string
  description: string
  duration: string
  publishedAt: string
  category: string
}

export const resourceArticles: ResourceArticle[] = [
  {
    id: 1,
    title: "Understanding Depression in Ethiopian Context",
    excerpt: "A comprehensive guide to recognizing and addressing depression within our cultural framework.",
    category: "Awareness",
    readTime: "8 min read",
    author: "Dr. Rediet Feleke",
    publishedAt: "2024-04-20",
    tags: ["Depression", "Culture", "Awareness"],
    featured: true,
    content: [
      "Depression is a serious health condition that affects mood, sleep, appetite, and relationships. In Ethiopian communities, symptoms are often described through physical pain, fatigue, and social withdrawal rather than emotional language.",
      "Early support starts with recognition. Persistent sadness, reduced motivation, irritability, hopelessness, and inability to focus for more than two weeks are common warning signs. Family members can help by listening without judgment and encouraging medical support.",
      "Recovery is possible with a combination of professional care, social connection, and practical routines. Structured sleep, movement, spiritual/community support, and follow-up with health workers can improve outcomes significantly."
    ]
  },
  {
    id: 2,
    title: "Talking to Family About Mental Health",
    excerpt: "Practical strategies for opening conversations about mental wellness with loved ones.",
    category: "Coping Tools",
    readTime: "6 min read",
    author: "Simret G. Dessie",
    publishedAt: "2024-04-18",
    tags: ["Family", "Communication", "Support"],
    featured: false,
    content: [
      "Choose a calm moment and use personal statements, such as 'I have been feeling overwhelmed and need support.'",
      "Focus on practical needs first. Explain what support looks like: listening, helping with appointments, or reducing pressure at home.",
      "If a family member is hesitant, share trusted educational materials and involve a respected community or health professional."
    ]
  },
  {
    id: 3,
    title: "Healing After Trauma: A Journey of Recovery",
    excerpt: "Understanding trauma responses and pathways to healing in our communities.",
    category: "Recovery",
    readTime: "12 min read",
    author: "Messeret Gossa",
    publishedAt: "2024-04-15",
    tags: ["Trauma", "Recovery", "Healing"],
    featured: true,
    content: [
      "Trauma can show up as fear, numbness, hypervigilance, or difficulty trusting others. These are normal responses to overwhelming events.",
      "Grounding tools, safe relationships, and trauma-informed counseling are key steps in long-term recovery.",
      "Healing is not linear. Consistent care, reduced isolation, and culturally sensitive support help people regain safety and meaning."
    ]
  },
  {
    id: 4,
    title: "Youth Mental Health: Breaking the Silence",
    excerpt: "Addressing the unique mental health challenges faced by Ethiopian youth today.",
    category: "Youth Wellness",
    readTime: "10 min read",
    author: "AURA Team",
    publishedAt: "2024-04-12",
    tags: ["Youth", "Stigma", "Education"],
    featured: false,
    content: [
      "Young people often face pressure related to academic expectations, unemployment, and social comparison.",
      "Schools and families can reduce stigma by normalizing conversations, providing peer-support circles, and connecting students with counselors.",
      "Early intervention protects long-term wellbeing and improves learning, relationships, and resilience."
    ]
  },
  {
    id: 5,
    title: "Understanding Addiction and Recovery",
    excerpt: "A compassionate look at addiction as a mental health condition and paths to recovery.",
    category: "Addiction",
    readTime: "15 min read",
    author: "Dr. Rediet Feleke",
    publishedAt: "2024-04-10",
    tags: ["Addiction", "Recovery", "Support"],
    featured: false,
    content: [
      "Addiction is a health condition, not a moral failure. It involves changes in brain reward systems and coping behavior.",
      "Effective care combines medical treatment, psychosocial support, and long-term follow-up.",
      "Community acceptance and family support are critical to reducing relapse and restoring dignity."
    ]
  }
]

export const resourcePodcasts: ResourcePodcast[] = [
  {
    id: 1,
    title: "Voices of Recovery - Episode 12: Sarah's Journey",
    description: "A powerful story of overcoming anxiety and finding community support.",
    duration: "32 min",
    publishedAt: "2024-04-22",
    category: "Personal Stories"
  },
  {
    id: 2,
    title: "Mental Health Myths in Ethiopian Culture",
    description: "Dr. Rediet discusses common misconceptions and cultural barriers to mental health care.",
    duration: "28 min",
    publishedAt: "2024-04-15",
    category: "Education"
  },
  {
    id: 3,
    title: "Supporting a Friend in Crisis",
    description: "Practical advice for being there when someone you care about is struggling.",
    duration: "25 min",
    publishedAt: "2024-04-08",
    category: "Support"
  }
]
