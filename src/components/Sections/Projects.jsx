import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard';

const projectsData = [
    {
        title: "PcRemote",
        description: "An IoT interaction interface where a microcontroller receives IR data from a remote and sends it to the computer. Uses Java to interpret codes and execute system operations.",
        tech: ["Java", "IoT", "Microcontrollers", "IR"],
        github: "", // Add if verified
        external: "",
        year: "2017"
    },
    {
        title: "Home Automation System",
        description: "Complete electronics and software solution for room automation. Operated by IR remote and custom Android app via Bluetooth/Internet. Controls lights, alarms, and LED strips.",
        tech: ["Android", "Bluetooth", "IoT", "C++"],
        github: "",
        external: "",
        year: "2016"
    },
    {
        title: "Virtual Mouse",
        description: "A computer vision application that processes webcam images to detect objects and perform mouse operations based on coordinates, simulating a physical mouse.",
        tech: ["Java", "Computer Vision", "Image Processing"],
        github: "",
        external: "",
        year: "2015"
    },
    {
        title: "Features Extraction from MRI",
        description: "Image processing application for MRI scans. Segmented and extracted White Matter, Gray Matter, CSF, Skin, and Fat into binary images for medical analysis.",
        tech: ["Java", "Image Processing", "Medical Imaging"],
        github: "",
        external: "",
        year: "2014"
    },
    {
        title: "Steganography Tool",
        description: "Security application for data encryption that encodes secret data into image files as cover media, ensuring secure data transmission.",
        tech: ["Java", "Cryptography", "Security"],
        github: "",
        external: "",
        year: "2013"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{ width: '100%' }}
                >
                    <h2 className="section-header" style={{ fontFamily: 'var(--font-display)' }}>
                        <span className="section-header-number">03.</span>
                        Some Things I've Built
                        <span className="section-header-line"></span>
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '15px',
                        marginTop: '50px'
                    }}>
                        {projectsData.map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
