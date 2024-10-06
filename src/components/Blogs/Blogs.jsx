import Img1 from '../../assets/blog/blog1.png';
import Img2 from '../../assets/blog/blog2.png';
import Img3 from '../../assets/blog/blog3.png';
import BlogCard from './BlogCard';

const BlogData = [
    {
        id: 1,
        img: Img1,
        title: 'Distinctively cultivate leading-edge meta-services and information. Professionally formulate.',
        description: 'Dramatically fashion parallel opportunities vis-a-vis multimedia based results. Energetically envision value-added models with process-centric data. Distinctively exploit effective systems via user-centric deliverables. Synergistically utilize scalable interfaces before intermediated synergy. Authoritatively grow user friendly e-tailers without cooperative infrastructures.Phosphorescently benchmark quality.',
        date: 'April 09, 2024',
        writer: 'Caption Doe'
    },
    {
        id: 2,
        img: Img2,
        title: 'Energetically enable go forward materials through impactful e-commerce. Uniquely engage.',
        description: 'Credibly grow e-business growth strategies whereas plug-and-play functionalities. Collaboratively implement prospective potentialities through ubiquitous leadership. Completely monetize equity invested channels before unique architectures. Professionally cultivate just in time quality vectors without strategic results. Conveniently re-engineer state of the art e-commerce.',
        date: 'June 12, 2024',
        writer: 'Johann Smith'
    },
    {
        id: 3,
        img: Img3,
        title: 'Dramatically predominate e-business processes with clicks mortar vocals. Proactively synergism transparent.',
        description: 'Seamlessly repurpose virtual outsourcing with exceptional growth strategies. Uniquely e-enable technically sound platforms and multidisciplinary solutions. Completely enhance ubiquitous web-readiness before premier synergy. Conveniently predominate scalable paradigms rather than client-centered web services. Rapaciously create leading-edge value before revolutionary benefits completely.',
        date: 'March 29, 2024',
        writer: 'Mark Lee'
    }
];

const Blogs = () => {
    return (
        <div className='dark:bg-gray-900 dark:text-white'>
            <div className='container py-20'>
                <h2 className='mb-8 border-x-8 text-center text-3xl font-bold'>Our Latest Blogs</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                    {
                        BlogData.map((blog) => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Blogs;
