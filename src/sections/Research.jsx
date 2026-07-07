import {Button, Card, Col, Container, Modal, Row, Tab, Tabs} from "react-bootstrap";
import Cite from "../components/icons/Cite.jsx";
import Read from "../components/icons/Read.jsx";
import GithubSmall from "../components/logos/GithubSmall.jsx";
import Web from "../components/icons/Web.jsx";
import getWindowWidth from "../components/getWindowWidth.jsx";

import React, { useState } from 'react';
import CiteWindow from "../components/CiteWindow.jsx";
import NewPage from "../components/icons/NewPage.jsx";


function Research() {

  const publications = [


    {
      title: "IR3DE: A Linear Router for Large Language Models",
      authors: [
        {
          name: "Eros",
          surname: "Fanì"
        },
        {
          name: "Oğuzhan",
          surname: "Ersoy"
        },
      ],
      venue: "Resource-Adaptive Foundation Model Inference workshop (AdaptFM) @ ICML",
      date: 2026,
      link: "https://arxiv.org/pdf/2606.06098",
      cite: {
        text: "Fanì, Eros, and Oğuzhan Ersoy. IR3DE: A Linear Router for Large Language Models. Resource-Adaptive Foundation Model Inference workshop (AdaptFM) @ ICML 2026.",
        bibtex: "@misc{fani2026training,\n" +
          "  title={IR3DE: A Linear Router for Large Language Models},\n" +
          "  author={Fan{\`i}, Eros and Ersoy, O{\\u{g}}uzhan},\n" +
          "  booktitle={Resource-Adaptive Foundation Model Inference workshop (AdaptFM) @ ICML 2026},\n" +
          "  year={2026},\n" +
          "}"
      },
      website: "https://blog.gensyn.ai/look-beyond-one-size-fits-all-llms-with-ir3de/",
      code: "https://github.com/gensyn-ai/IR3DE",
      teaser_url: "assets/teasers/ir3de.png",
      description: "IR3DE is a lightweight ridge regression-based router that efficiently selects the best domain-expert LLM for each prompt without requiring expensive training. IR3DE allows domain experts to be added or removed at any time without retraining and always achieves performance comparable to or better than existing routing methods."
    },

    {
      title: "Training-Free Dynamic Upcycling of Expert language Models",
      authors: [
        {
          name: "Eros",
          surname: "Fanì"
        },
        {
          name: "Oğuzhan",
          surname: "Ersoy"
        },
      ],
      venue: "Scaling Post-training for LLMs workshop (SPOT) @ ICLR",
      date: 2026,
      link: "https://arxiv.org/pdf/2603.29765",
      cite: {
        text: "Fanì, Eros, and Oğuzhan Ersoy. Training-Free Dynamic Upcycling of Expert Language Models. Scaling Post-training for LLMs (SPOT) workshop @ ICLR 2026.",
        bibtex: "@misc{fani2026training,\n" +
          "  title={Training-Free Dynamic Upcycling of Expert Language Models},\n" +
          "  author={Fan{\`i}, Eros and Ersoy, O{\\u{g}}uzhan},\n" +
          "  booktitle={Scaling Post-training for LLMs (SPOT) workshop @ ICLR 2026},\n" +
          "  year={2026},\n" +
          "}"
      },
      website: "https://blog.gensyn.ai/dume/",
      code: "https://github.com/gensyn-ai/dume",
      teaser_url: "assets/teasers/dume.png",
      description: "Training LLMs is prohibitively expensive, and they often lack domain-specific expertise because they rely on general knowledge datasets. Dynamic Upcycling MoE (DUME) combines dense experts trained on different domains to construct a unified MoE multitask model that preserves the capabilities of the original dense experts. DUME is training-free, scalable, and cheap."
    },

    {
      title: "Diversity-Driven Learning: Tackling Spurious Correlations and Data Heterogeneity in Federated Models",
      authors: [
        {
          name: "Gergely Daniel",
          surname: "Németh"
        },
        {
          name: "Eros",
          surname: "Fanì"
        },

        {
          name: "Yeat Jeng",
          surname: "Ng"
        },
        {
          name: "Barbara",
          surname: "Caputo"
        },
        {
          name: "Miguel Ángel",
          surname: "Lozano"
        },
        {
          name: "Nuria",
          surname: "Oliver"
        },
        {
          name: "Novi",
          surname: "Quadrianto"
        },
      ],
      venue: "IEEE International Conference on Federated Learning Technologies and Applications (FLTA)",
      date: 2025,
      link: "https://arxiv.org/pdf/2504.11216",
      cite: {
        text: "Németh, G. D., Fanì, E., Ng, Y. J., Caputo, B., Lozano, M. Á., Oliver, N., & Quadrianto, N. (2025). Diversity-Driven Learning: Tackling Spurious Correlations and Data Heterogeneity in Federated Models. Third IEEE International Conference on Federated Learning Technologies and Applications (FLTA).",
        bibtex: "@article{nemeth2025diversity,\n" +
          "  title={Diversity-Driven Learning: Tackling Spurious Correlations and Data Heterogeneity in Federated Models},\n" +
          "  author={Németh, Gergely D and FanFan{\`i}, Eros and Ng, Yeat Jeng and Caputo, Barbara and Lozano, Miguel Ángel and Oliver, Nuria and Quadrianto, Novi},\n" +
          "  journal={Third IEEE International Conference on Federated Learning Technologies and Applications (FLTA)},\n" +
          "  year={2025}\n" +
          "}"
      },
      website: "",
      code: "",
      teaser_url: "assets/teasers/feddiverse.png",
      description: "Federated Learning suffers from statistical heterogeneity due to imbalanced and non-IID client data. Six metrics are introduced to quantify this issue, and seven datasets are created to reflect real-world scenarios. A new client selection method, FedDiverse, improves performance by encouraging collaboration between diverse clients with minimal overhead."
    },

    {
      title: "Addressing Heterogeneity in Federated Learning for Real-world Vision Applications",
      authors: [
        {
          name: "Eros",
          surname: "Fanì"
        },
      ],
      venue: "Ph.D. Thesis",
      date: 2025,
      link: "phd_thesis_eros_fani.pdf",
      cite: {
        text: "Fanì, E. (2025). Addressing Heterogeneity in Federated Learning for Real-world Vision Applications. Ph.D. Thesis.",
        bibtex: "@article{fani2025addressing,\n" +
                "  title={Addressing Heterogeneity in Federated Learning for Real-world Vision Applications},\n" +
                "  author={FanFan{\`i}, Eros},\n" +
                "  year={2025},\n" +
                "  publisher={Politecnico di Torino}\n" +
                "}"
      },
      website: "",
      code: "",
      teaser_url: "assets/teasers/thesis.png",
      description: "Federated Learning faces significant challenges due to data heterogeneity in computer vision tasks. Fed3R, a ridge regression-based initialization method, OLL for personalized local classifiers, and LADD for source-free domain adaptation are introduced alongside the FedDrive benchmark to address these issues. Experiments show these approaches improve performance, robustness, scalability, and efficiency compared to existing FL methods."
    },

    {
      title: "Interaction-Aware Gaussian Weighting for Clustered Federated Learning",
      authors: [
        {
          name: "Alessandro",
          surname: "Licciardi",
        },
        {
          name: "Davide",
          surname: "Leo",
        },
        {
          name: "Eros",
          surname: "Fanì",
        },
        {
          name: "Barbara",
          surname: "Caputo",
        },
        {
          name: "Marco",
          surname: "Ciccone",
        }
      ],
      venue: "Forty-second International Conference on Machine Learning (ICML)",
      date: 2025,
      link: "https://arxiv.org/pdf/2502.03340",
      cite: {
        text: "Licciardi, A., Leo, D., Fanì, E., Caputo, B., & Ciccone, M. (2025). Interaction-Aware Gaussian Weighting for Clustered Federated Learning. Forty-second International Conference on Machine Learning (ICML).",
        bibtex: "@article{licciardi2025interaction,\n" +
          "  title={Interaction-Aware Gaussian Weighting for Clustered Federated Learning},\n" +
          "  author={Licciardi, Alessandro and Leo, Davide and FanFan{\`i}, Eros and Caputo, Barbara and Ciccone, Marco},\n" +
          "  journal={Forty-second International Conference on Machine Learning (ICML)},\n" +
          "  year={2025}\n" +
          "}"
      },
      website: "",
      code: "",
      teaser_url: "assets/teasers/fedgwc.png",
      description: "Conventional Federated Learning struggles with data heterogeneity and class imbalance. FedGWC, a new clustered FL method, groups clients using a Gaussian reward-based interaction method to enhance personalization and robustness. A novel clustering metric, the Wasserstein Adjusted Score, evaluates cluster cohesion. Experiments show that FedGWC improves both cluster quality and accuracy over existing methods."
    },

    {
      title: "Resource-Efficient Personalization in Federated Learning With Closed-Form Classifiers",
      authors: [
        {
          name: "Eros",
          surname: "Fanì",
        },
        {
          name: "Raffaello",
          surname: "Camoriano",
        },
        {
          name: "Barbara",
          surname: "Caputo",
        },
        {
          name: "Marco",
          surname: "Ciccone",
        }
      ],
      venue: "IEEE Access",
      date: 2025,
      link: "https://ieeexplore.ieee.org/abstract/document/10946159",
      cite: {
        text: "Fanì, E., Camoriano, R., Caputo, B., & Ciccone, M. (2025). Resource-Efficient Personalization in Federated Learning with Closed-Form Classifiers. IEEE Access.",
        bibtex: "@article{fani2025resource,\n" +
          "  title={Resource-Efficient Personalization in Federated Learning with Closed-Form Classifiers},\n" +
          "  author=FanFan{\`i}, Eros and Camoriano, Raffaello and Caputo, Barbara and Ciccone, Marco},\n" +
          "  journal={IEEE Access},\n" +
          "  year={2025},\n" +
          "  publisher={IEEE}\n" +
          "}"
      },
      website: "https://fed-3r.github.io/",
      code: "https://github.com/Erosinho13/Fed3R",
      teaser_url: "assets/teasers/fed3r_access.png",
      description: "Statistical heterogeneity in Federated Learning causes client drift, especially in classification layers. Fed3R solves this problem by constructing a closed-form ridge classifier immune to statistical heterogeneity which can also serve as a strong initialization for FL/Personalized FL methods. Additionally, OLL simplifies local classifiers by focusing on local classes, improving efficiency and accuracy."
    },

    {
      title: "Accelerating Heterogeneous Federated Learning with Closed-form Classifiers",
      authors: [
        {
          name: "Eros",
          surname: "Fanì",
        },
        {
          name: "Raffaello",
          surname: "Camoriano",
        },
        {
          name: "Barbara",
          surname: "Caputo",
        },
        {
          name: "Marco",
          surname: "Ciccone",
        }
      ],
      venue: "Forty-first International Conference on Machine Learning (ICML)",
      date: 2024,
      link: "https://arxiv.org/pdf/2406.01116",
      cite: {
        text: "Fanì, E., Camoriano, R., Caputo, B., & Ciccone, M. (2024). Accelerating heterogeneous federated learning with closed-form classifiers. Forty-first International Conference on Machine Learning (ICML).",
        bibtex: "@article{fani2024accelerating,\n" +
          "  title={Accelerating heterogeneous federated learning with closed-form classifiers},\n" +
          "  author={Fan{\`i}, Eros and Camoriano, Raffaello and Caputo, Barbara and Ciccone, Marco},\n" +
          "  journal={Forty-first International Conference on Machine Learning (ICML)},\n" +
          "  year={2024}\n" +
          "}"
      },
      website: "https://fed-3r.github.io/",
      code: "https://github.com/Erosinho13/Fed3R",
      teaser_url: "assets/teasers/fed3r.png",
      description: "Non-IID data in Federated Learning leads to client drift and poor convergence. Fed3R addresses this by computing a closed-form Ridge Regression classifier using pre-trained features, offering robustness to heterogeneity and client sampling. When used as initialization (Fed3R+FT), it further boosts performance while stabilizing training."
    },

    {
      title: "Collaborative Visual Place Recognition through Federated Learning",
      authors: [
        {
          name: "Mattia",
          surname: "Dutto",
        },
        {
          name: "Gabriele",
          surname: "Berton",
        },
        {
          name: "Debora",
          surname: "Caldarola",
        },
        {
          name: "Eros",
          surname: "Fanì",
        },
        {
          name: "Gabriele",
          surname: "Trivigno",
        },
        {
          name: "Carlo",
          surname: "Masone",
        },
      ],
      venue: "FedVision Workshop in Conjunction with the IEEE/CVF Conference on Computer Vision and Pattern Recognition (FedVision CVPR)",
      date: 2024,
      link: "https://arxiv.org/pdf/2404.13324",
      cite: {
        text: "Dutto, M., Berton, G., Caldarola, D., Fanì, E., Trivigno, G., & Masone, C. (2024). Collaborative Visual Place Recognition through Federated Learning. FedVision Workshop in Conjunction with the IEEE/CVF Conference on Computer Vision and Pattern Recognition (FedVision CVPR).",
        bibtex: "@inproceedings{dutto2024collaborative,\n" +
          "  title={Collaborative Visual Place Recognition through Federated Learning},\n" +
          "  author={Dutto, Mattia and Berton, Gabriele and Caldarola, Debora and Fanì, Eros and Trivigno, Gabriele and Masone, Carlo},\n" +
          "  journal={FedVision Workshop in Conjunction with the Conference on Computer Vision and Pattern Recognition (FedVision CVPR)},\n" +
          "  pages={4215--4225},\n" +
          "  year={2024}\n" +
          "}"
      },
      website: "",
      code: "https://github.com/mattiadutto/geolocalization-in-federated-learning",
      teaser_url: "assets/teasers/fedvpr.png",
      description: "Visual Place Recognition (VPR) is reframed as a Federated Learning task with FedVPR, adapting contrastive learning training and data mining to this scenario. This introduces a novel, realistic benchmark for FL, paving the way for broader use in image retrieval tasks."
    },

    {
      title: "Fed3R: Recursive Ridge Regression for Federated Learning with strong pre-trained models",
      authors: [
        {
          name: "Eros",
          surname: "Fanì",
        },
        {
          name: "Raffaello",
          surname: "Camoriano",
        },
        {
          name: "Barbara",
          surname: "Caputo",
        },
        {
          name: "Marco",
          surname: "Ciccone",
        },
      ],
      venue: "International Workshop on Federated Learning in the Age of Foundation Models in Conjunction with NeurIPS (FL@FM NeurIPS)",
      date: 2023,
      link: "https://openreview.net/pdf?id=LiSj1GRVhL",
      cite: {
        text: "Fanì, E., Camoriano, R., Caputo, B., & Ciccone, M. (2023). Fed3R: Recursive Ridge Regression for Federated Learning with strong pre-trained models. In International Workshop on Federated Learning in the Age of Foundation Models in Conjunction with NeurIPS (FL@FM NeurIPS).",
        bibtex: "@inproceedings{fani2023fed3r,\n" +
          "  title={Fed3R: Recursive Ridge Regression for Federated Learning with strong pre-trained models},\n" +
          "  author={Fan{\`i}, Eros and Camoriano, Raffaello and Caputo, Barbara and Ciccone, Marco},\n" +
          "  journal={International Workshop on Federated Learning in the Age of Foundation Models in Conjunction with NeurIPS (FL@FM NeurIPS)},\n" +
          "  year={2023}\n" +
          "}"
      },
      website: "https://fed-3r.github.io/",
      code: "https://github.com/Erosinho13/Fed3R",
      teaser_url: "assets/teasers/fed3r_workshop.png",
      description: "Fed3R replaces the softmax classifier in Federated Learning with a closed-form ridge regression classifier robust to statistical heterogeneity. Fed3R convergences fast with low communication costs. Its incremental formulation is equivalent to the centralized solution using fixed pre-trained features, allowing for the usage of large feature extractors in FL, as backpropagation is not required. Moreover, Fed3R-RF achieves near-centralized accuracy with minimal overhead."
    },

    {
      title: "FedDrive v2: an Analysis of the Impact of Label Skewness in Federated Semantic Segmentation for Autonomous Driving",
      authors: [
        {
          name: "Eros",
          surname: "Fanì",
        },
        {
          name: "Marco",
          surname: "Ciccone",
        },
        {
          name: "Barbara",
          surname: "Caputo",
        },
      ],
      venue: "5th Italian Conference on Robotics and Intelligent Machines (I-RIM)",
      date: 2023,
      link: "https://arxiv.org/pdf/2309.13336",
      cite: {
        text: "Fanì, E., Ciccone, M., & Caputo, B. (2023). Feddrive v2: an analysis of the impact of label skewness in federated semantic segmentation for autonomous driving. 5th Italian Conference on Robotics and Intelligent Machines (I-RIM)",
        bibtex: "@article{fani2023feddrive,\n" +
          "  title={Feddrive v2: an analysis of the impact of label skewness in federated semantic segmentation for autonomous driving},\n" +
          "  author={Fan{\`i}, Eros and Ciccone, Marco and Caputo, Barbara},\n" +
          "  journal={5th Italian Conference on Robotics and Intelligent Machines (I-RIM)},\n" +
          "  year={2023}\n" +
          "}"
      },
      website: "https://feddrive.github.io/",
      code: "https://github.com/Erosinho13/FedDrive",
      teaser_url: "assets/teasers/feddrive_v2.png",
      description: "FedDrive v2 extends the FedDrive benchmark for semantic segmentation in autonomous driving in the Federated Learning setting by focusing on label distribution skewness across clients. Six new scenarios are introduced to analyze its impact compared to domain shift, along with an evaluation of using domain information at test time."
    },

    {
      title: "Learning Across Domains and Devices: Style-Driven Source-Free Domain Adaptation in Clustered Federated Learning",
      authors: [
        {
          name: "Donald",
          surname: "Shenaj",
          equal: true,
        },
        {
          name: "Eros",
          surname: "Fanì",
          equal: true,
        },
        {
          name: "Marco",
          surname: "Toldo",
        },
        {
          name: "Debora",
          surname: "Caldarola",
        },
        {
          name: "Antonio",
          surname: "Tavera",
        },
        {
          name: "Umberto",
          surname: "Micheli",
        },
        {
          name: "Marco",
          surname: "Ciccone",
        },
        {
          name: "Pietro",
          surname: "Zanuttigh",
        },

        {
          name: "Barbara",
          surname: "Caputo",
        },
      ],
      venue: "IEEE/CVF winter conference on applications of computer vision (WACV)",
      date: 2023,
      link: "https://arxiv.org/pdf/2309.13336",
      cite: {
        text: "Shenaj, D., Fanì, E., Toldo, M., Caldarola, D., Tavera, A., Michieli, U., Ciccone, M., Zanuttigh, P. & Caputo, B. (2023). Learning across domains and devices: Style-driven source-free domain adaptation in clustered federated learning. IEEE/CVF winter conference on applications of computer vision (WACV).",
        bibtex: "@inproceedings{shenaj2023learning,\n" +
          "  title={Learning across domains and devices: Style-driven source-free domain adaptation in clustered federated learning},\n" +
          "  author={Shenaj, Donald and Fanì, Eros and Toldo, Marco and Caldarola, Debora and Tavera, Antonio and Michieli, Umberto and Ciccone, Marco and Zanuttigh, Pietro and Caputo, Barbara},\n" +
          "  journal={IEEE/CVF winter conference on applications of computer vision (WACV).},\n" +
          "  year={2023}\n" +
          "}"
      },
      website: "",
      code: "https://github.com/Erosinho13/LADD",
      teaser_url: "assets/teasers/ladd.png",
      description: "FFreeDA is a new Federated Learning task for Semantic Segmentation where only the server has labeled data, and clients are fully unlabeled. LADD combines self-supervised learning with style-based federated clustering and regularization to address this problem, outperforming the baselines in this challenging setting."
    },

    {
      title: "FedDrive: Generalizing Federated Learning to Semantic Segmentation in Autonomous Driving",
      authors: [
        {
          name: "Lidia",
          surname: "Fantauzzo",
          equal: true,
        },
        {
          name: "Eros",
          surname: "Fanì",
          equal: true,
        },
        {
          name: "Debora",
          surname: "Caldarola",
        },
        {
          name: "Antonio",
          surname: "Tavera",
        },
        {
          name: "Fabio",
          surname: "Cermelli",
        },
        {
          name: "Marco",
          surname: "Ciccone",
        },
        {
          name: "Barbara",
          surname: "Caputo",
        },
      ],
      venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
      date: 2022,
      link: "https://arxiv.org/pdf/2202.13670",
      cite: {
        text: "Fantauzzo, L., Fanì, E., Caldarola, D., Tavera, A., Cermelli, F., Ciccone, M., & Caputo, B. (2022). Feddrive: Generalizing federated learning to semantic segmentation in autonomous driving. IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS). IEEE.",
        bibtex: "@inproceedings{fantauzzo2022feddrive,\n" +
          "  title={Feddrive: Generalizing federated learning to semantic segmentation in autonomous driving},\n" +
          "  author={Fantauzzo, Lidia and Fanì, Eros and Caldarola, Debora and Tavera, Antonio and Cermelli, Fabio and Ciccone, Marco and Caputo, Barbara},\n" +
          "  journal={IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},\n" +
          "  year={2022},\n" +
          "  organization={IEEE}\n" +
          "}"
      },
      website: "https://feddrive.github.io/",
      code: "https://github.com/Erosinho13/FedDrive",
      teaser_url: "assets/teasers/feddrive.png",
      description: "FedDrive is the first benchmark to address Semantic Segmentation in Federated Learning for autonomous driving, introducing three settings and two datasets with real-world challenges like heterogeneity and domain shifts. It highlights the importance of handling batch normalization statistics correctly and shows that style transfer improves generalization under domain shift."
    },
  ]

  const reviewer_conferences = [
    {
      acronym: "NeurIPS",
      name: "Conference on Neural Information Processing Systems",
      years: ["2026", "2025", "2024"],
    },
    {
      acronym: "AdaptFM-ICML",
      name: "Resource-Adaptive Foundation Model Inference workshop of the International Conference on Machine Learning",
      years: ["2026"],
    },
    {
      acronym: "SPOT-ICLR",
      name: "Scaling Post-training for LLMs workshop of the International Conference on Learning Representations",
      years: ["2026"],
    },
    {
      acronym: "RA-L",
      name: "IEEE Robotics and Automation Letters",
      years: ["2025", "2022"],
    },
    {
      acronym: "ECAI",
      name: "European Conference on Artificial Intelligence",
      years: ["2025", ],
      pc: "https://ecai2025.org/program-committee/",
    },
    {
      acronym: "CVPR",
      name: "IEEE/CVF Computer Vision and Pattern Recognition Conference",
      years: ["2025", ],
    },
    {
      acronym: "TMLR",
      name: "Transactions on Machine Learning Research",
      years: ["2024", ],
    },
    {
      acronym: "ECCV",
      name: "European Conference on Computer Vision",
      years: ["2024", ],
      outstanding: "certificate_outstanding_reviewer_ECCV24.pdf",
    },
    {
      acronym: "ICDL",
      name: "IEEE International Conference on Development and Learning",
      years: ["2023", ],
    },
    {
      acronym: "ECML-PKDD",
      name: "European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases",
      years: ["2023", ],
    },
    {
      acronym: "ICRA",
      name: "IEEE International Conference on Robotics and Automation",
      years: ["2023", ],
    },
    {
      acronym: "L2ID-ECCV",
      name: "Learning from Limited and Imperfect Data workshop of the European Conference on Computer Vision",
      years: ["2022", ],
    },
  ]

  const [show, setShow] = useState(false);
  const [cite, setCite] = useState({});
  const width = getWindowWidth();

  return (
    <Container fluid id="research" className="section research-section">
      <Row>
        <Col xs={12} className='section-title'>
          <h1> Research </h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className='section-subtitle'>
          <h2> Publications </h2>
        </Col>
      </Row>
      {
        publications.map((publication, index) => (
          <Row key={index} className="publication">
            <Col xs={12} md={8} className='publication-description'>
              <h5>
                {
                  (() => {
                    const index = publication.authors.findIndex(
                      (author) => author.name === 'Eros' && author.surname === 'Fanì'
                    );

                    if (index === 0) return (
                      <>
                        <strong>E. Fanì</strong>, et. al. “<em>{publication.title}</em>”.
                      </>
                    );

                    const author = publication.authors[0];
                    const initials = author.name
                      .split(' ')
                      .map((n) => n.charAt(0).toUpperCase() + '.')
                      .join(' ');
                    const displayName = `${initials} ${author.surname}${author.equal ? '*' : ''}`;

                    return (
                      <>
                        <span>{displayName}, {index > 1 ? <>…, </> : <></>}</span>
                        <strong>E. Fanì</strong>{author.equal ? '*' : ''}, et. al. “<em>{publication.title}</em>”.
                      </>
                    );
                  })()
                }
                <> {publication.venue}</>, {publication.date}.
              </h5>
              <Button size='sm' className="about-button publication-button"
                      onClick={() => window.open(publication.link, '_blank')}><Read/></Button>
              {publication.website ?
                <Button size='sm' className="about-button publication-button"
                        onClick={() => window.open(publication.website, '_blank')}><Web/></Button>
                : null}
              {publication.code ?
              <Button size='sm' className="about-button publication-button"
                      onClick={() => window.open(publication.code, '_blank')}><GithubSmall/></Button>
                : null }
              <Button size='sm' className="about-button publication-button"
                      onClick={() => {setShow(true); setCite(publication.cite)}}><Cite/></Button>
              {publication.description ? <Card className="publication-tldr">
              <CiteWindow show={show} setShow={setShow} cite={cite} />
              <Card.Text>
                {publication.description}
              </Card.Text>
              </Card> : null}
            </Col>
            <Col xs={12} md={4}>
              {
                publication.teaser_url ?
                  <img src={publication.teaser_url} alt={publication.teaser_url} className='teaser'/>
                  : null
              }
            </Col>
          </Row>
        ))
      }
      <span className='section-footnote'> *equal contribution. </span>

      <Row>
        <Col xs={12} className='section-subtitle' style={{marginTop: '15px'}}>
          <h2> Peer reviewing </h2>
        </Col>
      </Row>

      {reviewer_conferences.map((conference, index) => (
        <Row key={index} className={"review-row"}>
          <Col xs={width < 576 ? 12 : 8} className='review'>
            <ul className="review-list">
              <li>
                {conference.name} (<strong>{conference.acronym}</strong>)
                {conference.pc ?
                  <>
                    <br/>
                    <span className='review-pc'>
                      Invited as <strong>Program Committee </strong>
                      <span className='bind review-pc'> <strong> Member</strong>
                      <Button className='new-page-button' onClick={() =>
                        window.open(conference.pc, '_blank')}>
                          <NewPage />
                        </Button></span>
                    </span>
                  </>
                  : null
                }
                {conference.outstanding ?
                  <>
                    <br/>
                    <span className='review-pc'>
                      Awarded as <strong>Outstanding </strong>
                      <span className='bind review-pc'>
                        <strong>Reviewer</strong>
                        <Button className='new-page-button' onClick={() =>
                        window.open(conference.outstanding, '_blank')}>
                          <NewPage />
                        </Button>
                      </span>
                    </span>
                  </>
                  : null
                }
              </li>
            </ul>
          </Col>
          <Col xs={width < 576 ? 12 : 4} className='review-date'>
            🗓️ {conference.years.map((year, cindex) => (
            <span key={cindex}>{year}{cindex !== conference.years.length - 1 ? <>, </> : null}</span>
          ))}
          </Col>
        </Row>
      ))}

    </Container>
  );
}


export default Research;