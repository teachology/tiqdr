export interface Course {
  id: string;
  title: string;
  image: string;
  details: string[];
  price: number;
  isRecorded?: boolean;
  instructor: string;
  category: string;
  duration: string;
  certificateIncluded: boolean;
  videoPreviewUrl?: string;
}

export const courses: Course[] = [
  {
    id: 'tasis',
    title: 'دورة كمي تأسيس 2025',
    image: '/images/tasis.webp',
    details: ['شرح كامل لجميع الأساسيات', 'تسجيلات متاحة 24/7', 'واجبات مباشرة بعد كل درس'],
    price: 125,
    isRecorded: true,
    instructor: 'د. عماد الجريري',
    category: 'تأسيس',
    duration: '8 أسابيع',
    certificateIncluded: true,
    videoPreviewUrl: 'https://www.youtube.com/embed/uX2aSvxxoHY',
  },
  {
    id: 'mohawsib',
    title: 'دورة كمي محوسب 2025',
    image: '/images/mohawsib.jpg',
    details: ['اختبارات دورية لتقييم المستوى', 'تسجيلات متاحة بعد كل بث مباشر'],
    price: 50,
    isRecorded: true,
    instructor: 'د. عماد الجريري',
    category: 'محوسب',
    duration: '6 أسابيع',
    certificateIncluded: true,
    videoPreviewUrl: 'https://www.youtube.com/embed/qpic7IMssjA',
  },
  {
    id: 'recorded',
    title: 'الدورات المسجلة - بنوك التأسيس',
    image: '/images/recorded.jpg',
    details: ['فيديوهات شاملة لأساسيات الكمي', 'تدريب على التجميعات', 'اختبارات تفاعلية'],
    price: 75,
    isRecorded: true,
    instructor: 'د. عماد الجريري',
    category: 'مسجلة',
    duration: '4 أسابيع',
    certificateIncluded: false,
    videoPreviewUrl: 'https://www.youtube.com/embed/-_GAynoTxos',
  },
  {
    id: 'live',
    title: 'دورات البث المباشر - 2025',
    image: '/images/live.jpg',
    details: ['بث مباشر أسبوعي', 'واجبات يومية', 'شرح شامل للتجميعات والكتب'],
    price: 200,
    isRecorded: false,
    instructor: 'د. عماد الجريري',
    category: 'بث مباشر',
    duration: '10 أسابيع',
    certificateIncluded: true,
    videoPreviewUrl: 'https://www.youtube.com/embed/ZzigKsXvrHs',
  }
];
