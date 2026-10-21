# model-merging-autoresearch

## Title

Model Merging Autoresearch

## Subtitle

An LLM designs and tests LoRA merging methods

## Summary

An evaluation framework for AI agents that propose, implement, and test new ways to merge LoRA-finetuned language models.

## Details

This project investigates whether an LLM research agent can develop new LoRA model-merging methods. Inspect manages the research loop: the agent reads reference papers and baseline code, writes a candidate merging function, evaluates it, and refines its approach within configurable time, token, and evaluation budgets.

Modal runs candidate code in an isolated sandbox and evaluates merged Llama-3-8B models on SNLI, MNLI, and SciTail. The benchmark compares candidates with established merging baselines, including Task Arithmetic, TIES, DARE-TIES, and KnOTS. Optional human reviews assess innovativeness and logical soundness separately from automatic performance scores.

# ir3de-axl

## Title

IR3DE-AXL

## Subtitle

A collective inference network for expert LLMs

## Summary

A decentralized chat network that routes each prompt to a specialist LLM, wherever it is hosted.

## Details

I led development of IR3DE-AXL at Gensyn, bringing domain-expert language models together in a peer-to-peer chat system. Each node on Gensyn’s AXL network hosts one or more experts, while IR3DE selects the expert best suited to each message.

The platform combines lightweight, ridge-regression-based routing with peer-to-peer transport, a terminal chat interface, and on-demand expert loading. Experts can join or leave by updating their routing statistics, without retraining the router.

This work is based on [IR3DE: A Linear Router for Large Language Models (AdaptFM ICML 2026)](https://arxiv.org/abs/2606.06098), which introduces a lightweight ridge-regression router that matches each prompt to a domain-expert LLM and supports changes to the expert pool without retraining from scratch.

# feddrive

## Title

FedDrive

## Subtitle

Federated semantic segmentation for autonomous driving

## Summary

The first federated learning benchmark for semantic segmentation in autonomous driving, designed to test how different methods handle heterogeneity across roads, weather conditions, and data distributions.

## Details

FedDrive brings semantic segmentation for autonomous driving into federated learning, where clients learn collaboratively from data kept on their own devices. The benchmark uses [Cityscapes](https://www.cityscapes-dataset.com/) and [IDDA](https://idda-dataset.github.io/) datasets to study statistical heterogeneity and generalization to unseen domains.

The [original work (IROS 2022)](https://arxiv.org/abs/2202.13670) focuses on scene heterogeneity and generalization. [FedDrive v2 (I-RIM 2023)](https://arxiv.org/abs/2309.13336) extends the benchmark to label skewness, enabling a closer look at how class imbalance and domain shifts affect federated semantic segmentation.

# fed3r

## Title

Fed3R

## Subtitle

Closed-form classifiers for heterogeneous federated learning

## Summary

Fast, communication-efficient federated learning with closed-form classifiers and strong pre-trained features.

## Details

Introduced in our [NeurIPS 2023 workshop paper](/fed3r-paper.pdf), Fed3R replaces iterative classifier training with a closed-form ridge-regression solution on fixed, pre-trained features. Clients compute local statistics that the server aggregates incrementally to recover the same classifier as centralized ridge regression. This makes the solution independent of how the data is partitioned across clients or the order in which they participate, while retaining information from earlier clients without backpropagating through the feature extractor.

Our [ICML 2024 paper, Accelerating Heterogeneous Federated Learning with Closed-form Classifiers](https://arxiv.org/abs/2406.01116), develops this approach further. Fed3R-RF uses random Fourier features to approximate RBF kernel ridge regression, while Fed3R+FT uses the closed-form classifier as initialization for further FL training, improving convergence speed and reducing communication costs.

The [IEEE Access 2025 extension, Resource-Efficient Personalization in Federated Learning With Closed-Form Classifiers](https://ieeexplore.ieee.org/document/10946159), introduces OLL for efficient local classifier personalization. A four-phase benchmark evaluates combinations of classifier initialization, federated training, partial personalization, and full personalization, examining how each stage contributes to accuracy, computation, and communication costs.

# this-website

## Title

This website

## Subtitle

A home for my research and open-source work

## Summary

My personal portfolio: a home for my research, experience, education, and projects.

## Details

A responsive portfolio built with React, Vite, and Bootstrap, and hosted on GitHub Pages. Project cards, publications, and career milestones are backed by JSON and Markdown so the content is easy to maintain.

The site includes publication filters, expandable project and experience details, section-aware navigation, and light, dark, and automatic themes. It brings together my work, open-source projects, and professional background in one place.

# first-person-action-recognition

## Title

First Person Action Recognition

## Subtitle

Object-centric attention with motion supervision

## Summary

Recognizing fine-grained cooking actions from first-person video, combining object-centric attention with motion supervision.

## Details

In FPAR, I investigated fine-grained cooking action recognition from first-person video on the [GTEA61 dataset](https://cbs.ic.gatech.edu/fpv/). I reproduced [Ego-RNN (BMVC 2018)](https://arxiv.org/abs/1807.11794), combining ResNet-34 features and object-centric attention from class activation maps with a ConvLSTM to model how objects and actions evolve over time. I also evaluated a two-stream model combining RGB appearance with optical flow.

I then explored an auxiliary self-supervised motion-segmentation task, comparing classification and regression formulations and experimenting with motion-map resolution and grayscale targets. Further experiments tested a static/dynamic discriminator and a [Representation Flow layer (CVPR 2019)](https://arxiv.org/abs/1810.01455) to better capture temporal motion patterns. These experiments focused on actions with similar visual appearance but different movement, such as opening and closing the same object.

# speaker-accent-recognition

## Title

Speaker Accent Recognition

## Subtitle

Comparing classifiers on MFCC speech features

## Summary

Comparing classical machine-learning methods for classifying six accent groups from MFCC speech features.

## Details

The goal is to classify a speaker’s accent from acoustic features and investigate how preprocessing, class imbalance, and model choice affect recognition performance. The study uses the [Speaker Accent Recognition dataset](https://archive.ics.uci.edu/dataset/518/speaker%2Baccent%2Brecognition), containing 329 recordings across six accent groups, each represented by 12 precomputed Mel-frequency cepstral coefficients (MFCCs).

The project explores feature distributions, then compares z-score normalization, SMOTE oversampling, NearMiss undersampling, and dimensionality reduction through PCA and Fisher discriminant projections. Classifiers include decision trees, random forests, k-nearest neighbors, support vector machines, multinomial logistic regression, and Fisher multiple discriminant analysis.

Evaluation uses stratified 75/25 train–test splits and five-fold grid search for hyperparameter selection. Accuracy, precision, recall, and F1 scores quantify performance, while confusion matrices and learning curves help examine errors and generalization.

# biopy

## Title

BioPy

## Subtitle

Multi-omics translation through a shared latent space

## Summary

Translating between biological data modalities with separate autoencoders that learn a shared latent space, including methods for unpaired data.

## Details

BioPy is a Python toolkit for multi-omics translation: modality-specific autoencoders map data into a common latent representation, allowing samples from one modality to be decoded into another. The project reproduces and extends autoencoder-based methods for linking imaging and sequencing data.

I explored [variational autoencoders](https://arxiv.org/abs/1312.6114) and [adversarial autoencoders](https://arxiv.org/abs/1511.05644), joint training with domain and label discriminators, and latent-alignment losses including [MK-MMD](https://arxiv.org/abs/1502.02791) and [HAFN and SAFN](https://arxiv.org/abs/1811.07456). Experiments cover [A549 RNA/ATAC data](https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE117089), [CD4+ RNA/chromatin images](https://pmc.ncbi.nlm.nih.gov/articles/PMC7782789/), and [GDC mRNA/miRNA/DNA methylation data](https://portal.gdc.cancer.gov/). The [presentation](https://docs.google.com/presentation/d/1PQnaNbE_BINcSLyMks-47APlWFtEvOBbIC9ztOMWJLE/edit?usp=sharing) examines paired and unpaired settings, latent-space alignment, reconstruction, and cross-domain translation, including the limitations of rebalancing imaging data with [SMOTE](https://imbalanced-learn.org/stable/references/generated/imblearn.over_sampling.SMOTE.html).
