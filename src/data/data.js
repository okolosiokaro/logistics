import { FaChartLine } from "react-icons/fa";
import { GiCargoShip } from "react-icons/gi";
import { MdFlightTakeoff } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa6";





const ServiceLists = [
    {
        id: 1,
        service: 'Freight',
        name: 'Freight Transportation',
        description: 'From trucking to air freight, we provide reliable transportation services to move your goods efficiently across any distance.',
        detail:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quasi dolor molestiae illum placeat officiis rerum hic unde praesentium blanditiis vel culpa asperiores eveniet dolores, officia nesciunt aliquam? Cum, tenetur possimus? Possimus cumque iusto, vitae et hic officia maiores earum consectetur provident commodi similique, repellendus explicabo quia recusandae. Rerum adipisci, maiores architecto commodi repudiandae quidem explicabo voluptate non dicta iste hic amet, unde dolorem eos minima deserunt sunt autem tempore?",
        subText:'From trucking to air Freight',
        icon:<MdFlightTakeoff />

    },
    {
        id: 2,
        service: 'Warehouse',
        name: 'Warehousing and Distribution',
        description: 'Our state-of-the-art warehouses are strategically located for optimal inventory management and distribution, ensuring your products reach their destinations on time, every time.',
        detail:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quasi dolor molestiae illum placeat officiis rerum hic unde praesentium blanditiis vel culpa asperiores eveniet dolores, officia nesciunt aliquam? Cum, tenetur possimus? Possimus cumque iusto, vitae et hic officia maiores earum consectetur provident commodi similique, repellendus explicabo quia recusandae. Rerum adipisci, maiores architecto commodi repudiandae quidem explicabo voluptate non dicta iste hic amet, unde dolorem eos minima deserunt sunt autem tempore?",
        subText:'Best and advanced warehousing and distribution',
        icon:<FaWarehouse/>

    },
    {
        id: 3,
        service: 'Clearance',
        name: 'Customs Clearance',
        description: 'Navigating the complexities of customs regulations can be daunting. Let our experts handle the paperwork and procedures to ensure smooth clearance for your imports and exports.',
        detail:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quasi dolor molestiae illum placeat officiis rerum hic unde praesentium blanditiis vel culpa asperiores eveniet dolores, officia nesciunt aliquam? Cum, tenetur possimus? Possimus cumque iusto, vitae et hic officia maiores earum consectetur provident commodi similique, repellendus explicabo quia recusandae. Rerum adipisci, maiores architecto commodi repudiandae quidem explicabo voluptate non dicta iste hic amet, unde dolorem eos minima deserunt sunt autem tempore?",
        subText:'Fast tracking custom clearance process',
        icon: <GiCargoShip />
    },
    {
        id: 4,
        service: 'Supply',
        name: 'Supply Chain Optimization',
        description: "We analyze your supply chain to identify opportunities for efficiency improvements, cost savings, and risk mitigation, helping you stay competitive in today's dynamic market.",
        detail:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quasi dolor molestiae illum placeat officiis rerum hic unde praesentium blanditiis vel culpa asperiores eveniet dolores, officia nesciunt aliquam? Cum, tenetur possimus? Possimus cumque iusto, vitae et hic officia maiores earum consectetur provident commodi similique, repellendus explicabo quia recusandae. Rerum adipisci, maiores architecto commodi repudiandae quidem explicabo voluptate non dicta iste hic amet, unde dolorem eos minima deserunt sunt autem tempore?",
        subText:'Improved supply chain efficiency',
        icon: <FaChartLine />
    }
];

const FleetLists = [
    {
        id: 1,
        image: '',
        model: 'Commercial Van',
        capacity: '3t',
        range: '100km'    
    },
    {
        id: 2,
        image: '',
        model: 'Commercial Van',
        capacity: '3t',
        range: '100km'
    },
    {
        id: 3,
        image: '',
        model: 'Commercial Van',
        capacity: '3t',
        range: '100km'
    },
    {
       id: 4,
        image: '',
        model: 'Commercial Van',
        capacity: '3t',
        range: '100km'
    }
   

];
const Faqs = [
    {
      id: 1,
      question: 'What services does Logistics Company offer?',
      answer: '[Logistics Company Name] offers a comprehensive range of logistics services including freight forwarding, warehousing, customs clearance, last-mile delivery, supply chain consulting, and technology solutions.'
    },
    {
        id: 2,
        question: 'How can I track my shipment with [Logistics Company Name]?',
        answer: 'You can track your shipment using our online tracking portal or by contacting our customer service team with your tracking number. We provide real-time updates on the status and location of your shipment throughout the entire transportation process.'
    },
    {
        id: 3,
        question: 'What are your shipping rates and pricing policies?',
        answer: 'Our shipping rates are determined based on factors such as shipment size, weight, destination, and service level. We offer competitive pricing and transparent pricing policies to ensure that our clients receive the best value for their logistics needs.'
    },
    {
        id: 4,
        question:'How do you handle customs clearance for international shipments?',
        answer: 'Our experienced customs clearance team manages all aspects of customs documentation and clearance processes, ensuring compliance with regulations and minimizing delays. We work closely with customs authorities to expedite clearance and facilitate smooth transit of goods across borders.'
    },
    {
        id: 5,
        question:'What measures do you have in place to ensure the security of my goods in your warehouses?',
        answer: 'Our warehouses are equipped with advanced security systems including surveillance cameras, access control measures, and alarm systems. We also have strict inventory management procedures and trained staff to ensure the safety and security of your goods at all times.'
    }
];

export {Faqs, ServiceLists, FleetLists};
