import {
  AdjustmentsHorizontalIcon,
  CodeBracketIcon,
  LockOpenIcon,
  Square2StackIcon,
  DocumentCheckIcon,
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
  MagnifyingGlassIcon,
  LinkIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Services",
  desc: "From audits and compliance assessments to hands-on remediation and training, my services are designed to ensure your websites, apps, and digital documents are accessible to everyone. Whether you're starting from scratch or improving existing platforms, I bring expert insight and practical solutions that make accessibility a seamless part of your digital strategy.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Website Auditing",
      desc: "Automated and manual testing to meet WCAG 2.1, 2.2 AA Guidelines",
      icon: <CodeBracketIcon />,
    },
    {
      title: "Document Auditing",
      desc: "Microsoft Word, PowerPoint, Excel, PDF, Google Docs",
      icon: <DocumentCheckIcon />,
    },
    {
      title: "Web and Document Remediation",
      desc: "I will work with you on remediation strategies, or I can handle remediation for you",
      icon: <Square2StackIcon />,
    },
    {
      title: "Third Party Platform Evaluation",
      desc: "VPAT analysis, audits and product remediation recommendations",
      icon: <Square2StackIcon />,
    },
    {
      title: "Ongoing Support",
      desc: "Continuous monitoring, audits and remediation",
      icon: <LinkIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Advantages of Digital Accessibility",
  desc: "Making your website and documents accessible is crucial for inclusivity and can significantly improve your company's reach, SEO, public image, and overall user experience.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Inclusivity and Equal Access",
      desc: "Accessibility ensures that everyone, including people with disabilities, can access and interact with your website and digital assets.",
      icon: <LockOpenIcon />,
    },
    {
      title: "Increased Audience and Potential Customers",
      desc: "Accessible websites and digital assets will expand your audience base.",
      icon: <ArrowTrendingUpIcon />,
    },
    {
      title: "Improve Your Public Image",
      desc: "By making your website accessible, you demonstrate a commitment to inclusivity and social responsibility.",
      icon: <MagnifyingGlassIcon />,
    },
    {
      title: "Reduce Legal Risk",
      desc: "By making your website accessible, you demonstrate a commitment to inclusivity and social responsibility.",
      icon: <ShieldCheckIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
