import React, { useState } from 'react';
import { 
  Video, 
  FileText, 
  Database, 
  Table, 
  Mic, 
  Sparkles, 
  Search, 
  CheckSquare, 
  Sliders, 
  Layers,
  ArrowRight, 
  CheckCircle, 
  ExternalLink,
  X,
  Info,
  Clock,
  HelpCircle,
  Package
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
  activeServiceSlug?: string | null;
  onCloseServiceSlug?: () => void;
}

export interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  shortSummary: string;
  overview: string;
  icon: React.ComponentType<{ className?: string }>;
  imageSrc?: string;
  badge?: string;
  keyFeatures: string[];
  workflow: string[];
  deliverables: string[];
  clientRequirements: string[];
  quoteInformation: string;
  availabilityNote: string;
}

export const servicesData: ServiceDetail[] = [
  {
    id: 'image-video-annotation',
    number: '01',
    title: 'Image & Video Annotation',
    shortSummary: 'Bounding boxes, polygons, semantic segmentation and project-specific labeling.',
    overview: 'Precision computer vision annotation across high-resolution images and multi-frame video sequences. We coordinate trained annotators for static frames and continuous video streams, preserving temporal tracking and strict occlusion criteria.',
    icon: Video,
    imageSrc: '/assets/images/annotation_vision_preview_1793168820626.jpg',
    keyFeatures: [
      '2D Bounding Boxes & Object Detection',
      'Polygon & Semantic Segmentation',
      'Frame-by-Frame Video Tracking & Interpolation',
      'Keypoint & Landmark Labeling',
    ],
    workflow: [
      '1. Guideline & Class Ingestion: Review visual taxonomy, occlusion thresholds, and label definitions.',
      '2. Pilot Calibration Batch: 50–100 sample items labeled and calibrated with your engineering team.',
      '3. Production Allocation: Structured batch assignment to qualified vision annotators.',
      '4. Two-Tier Verification: Peer cross-checking and quality lead audit against IoU tolerances.',
      '5. Output Packaging: Exporting strictly to target format with verification manifests.',
    ],
    deliverables: [
      'COCO JSON format',
      'YOLO format (.txt normalized coordinates)',
      'Pascal VOC XML manifests',
      'Frame timestamp manifests (CSV / JSON)',
    ],
    clientRequirements: [
      'Raw images or video sequences (or secure cloud storage access)',
      'Annotation guidelines with visual positive/negative samples',
      'Defined class list and occlusion / truncation criteria',
    ],
    quoteInformation: 'Quoted per asset or per video minute based on target density, number of classes, and required review passes. Scope and availability depend on project assessment.',
    availabilityNote: 'Subject to project assessment and qualified specialist allocation at kickoff.',
  },
  {
    id: 'text-annotation-classification',
    number: '02',
    title: 'Text Annotation & Classification',
    shortSummary: 'Text labeling, categorization and structured language-data tasks.',
    overview: 'High-quality human labeling for Natural Language Processing (NLP) and Large Language Models. We handle Named Entity Recognition (NER), intent categorization, sentiment scoring, document taxonomy mapping, and syntactic parsing.',
    icon: FileText,
    imageSrc: '/assets/images/text_annotation_nlp_1793184708524.jpg',
    keyFeatures: [
      'Named Entity Recognition (NER)',
      'Intent & Topic Categorization',
      'Sentiment & Tone Scoring',
      'Document Hierarchy & Taxonomy Mapping',
    ],
    workflow: [
      '1. Taxonomy Alignment: Calibrate entity labels, nested spans, and boundary rules.',
      '2. Annotator Qualification: Linguistic screening across English, Hindi, and Bengali.',
      '3. Production Labeling: Careful token-level spans and sentence classification.',
      '4. Agreement Audit: Measuring Inter-Annotator Agreement (Cohen’s Kappa) on sample sets.',
      '5. Structured Export: Outputting clean JSONL or CoNLL datasets ready for training.',
    ],
    deliverables: [
      'Token-level CoNLL / JSONL datasets',
      'spaCy / Hugging Face compatible manifests',
      'Categorization master spreadsheets (CSV / Parquet)',
    ],
    clientRequirements: [
      'Raw text documents or conversational transcripts',
      'Entity dictionary and boundary rules (e.g. handle punctuation/titles)',
      'Label hierarchy guidelines',
    ],
    quoteInformation: 'Quoted per document, sentence, or token volume based on entity density and complexity. Scope and availability depend on project assessment.',
    availabilityNote: 'Allocated based on language fluency verification and task volume.',
  },
  {
    id: 'data-collection-sourcing',
    number: '03',
    title: 'Data Collection & Video Sourcing',
    shortSummary: 'Project-based data collection, organization, scenario video sourcing and preparation.',
    overview: 'Systematic sourcing and gathering of targeted real-world datasets to expand training corpora. We gather scenario-specific videos from verified public sources, collect domain text/images, and collate edge-case samples that prevent model blindspots.',
    icon: Database,
    imageSrc: '/assets/images/data_collection_sourcing_1793184709652.jpg',
    keyFeatures: [
      'Scenario-Specific Video Sourcing',
      'Multimodal Asset Retrieval & Cataloging',
      'Edge-Case & Real-World Anomaly Capture',
      'Structured Metadata Collation & Validation',
    ],
    workflow: [
      '1. Sourcing Protocol: Define specific scenarios, resolution criteria, and diversity rules.',
      '2. Systematic Retrieval: Targeted retrieval of verified public and domain assets.',
      '3. Quality Screening: Screen assets for clarity, audio audibility, and scenario match.',
      '4. Metadata Indexing: Cataloging source URLs, timestamps, duration, and contextual tags.',
      '5. Delivery Archive: Structured compressed archives or cloud-synced storage buckets.',
    ],
    deliverables: [
      'Curated high-resolution video clips (MP4 / WebM)',
      'Categorized image collections in structured folder hierarchies',
      'Master metadata catalogs (CSV / JSON)',
    ],
    clientRequirements: [
      'Detailed target search brief (scenarios, perspectives, environments)',
      'Minimum resolution and duration guidelines',
      'Criteria for disqualifying irrelevant media',
    ],
    quoteInformation: 'Quotes depend on search specificity, scarcity of the scenario, and required curation hours. Scope and availability depend on project assessment.',
    availabilityNote: 'Subject to public source availability and project-specific review.',
  },
  {
    id: 'data-entry-processing',
    number: '04',
    title: 'Data Entry & Processing',
    shortSummary: 'Spreadsheet operations, data entry and structured data processing.',
    overview: 'Reliable digital workforce support for large-scale data digitization, spreadsheet formatting, duplicate cleaning, database collation, and data standardization. We execute repetitive data operations with structured oversight.',
    icon: Table,
    imageSrc: '/assets/images/data_entry_processing_1793184710631.jpg',
    keyFeatures: [
      'High-Accuracy Spreadsheet Operations',
      'Data Digitization & OCR Correction',
      'De-duplication & Schema Standardization',
      'Catalog & Inventory Record Processing',
    ],
    workflow: [
      '1. Field Mapping: Review target spreadsheet columns, validation rules, and formats.',
      '2. Double-Key Data Entry: Blind dual-entry for critical numeric/text fields.',
      '3. Formula & Syntax QA: Automated schema validation scripts to catch entry discrepancies.',
      '4. Lead Audit: Random batch sampling and error threshold verification.',
      '5. Clean Delivery: Cleaned CSV, Excel, or SQL-ready formats.',
    ],
    deliverables: [
      'Standardized CSV / XLSX files',
      'Cleaned database ingest tables',
      'Data discrepancy & exception logs',
    ],
    clientRequirements: [
      'Source files (scans, PDFs, web links, raw records)',
      'Target spreadsheet schema and data formatting rules',
    ],
    quoteInformation: 'Quoted per record, row, or hourly workforce allocation. Scope and availability depend on project assessment.',
    availabilityNote: 'Scheduled according to batch size and available worker hours.',
  },
  {
    id: 'audio-transcription',
    number: '05',
    title: 'Audio Data & Transcription',
    shortSummary: 'Audio collection, transcription and language-related tasks.',
    overview: 'Precision human transcription and acoustic data preparation for Automatic Speech Recognition (ASR), voice bots, and audio analytics. We transcribe multi-accent recordings, timestamp utterances, and label acoustic noise profiles.',
    icon: Mic,
    imageSrc: '/assets/images/audio_speech_waveform_1793168819284.jpg',
    keyFeatures: [
      'Verbatim & Clean-Read Transcription',
      'Speaker Diarization & Timecoded Utterances',
      'Multi-Dialect Coverage (English, Hindi, Bengali)',
      'Acoustic Noise & Environment Labeling',
    ],
    workflow: [
      '1. Acoustic Profiling: Assess audio SNR, sample rate, and speaker count.',
      '2. Guideline Calibration: Establish rules for filler words, overlaps, and dialect terms.',
      '3. Human Transcription: Careful listening with speaker identification and timestamps.',
      '4. Senior Listener Review: Quality verification for difficult accents and alignment.',
      '5. Delivery Formatting: Export to timecoded SRT, VTT, or word-level JSON.',
    ],
    deliverables: [
      'Timecoded subtitle files (SRT / VTT)',
      'Word-level or utterance-level JSON transcripts',
      'Clean verbatim text corpora (TXT / JSONL)',
    ],
    clientRequirements: [
      'Audio or video source files (WAV, MP3, FLAC, MP4)',
      'Transcription style guide (Strict vs Clean Verbatim)',
      'Glossary of specialized technical terms or proper names',
    ],
    quoteInformation: 'Quoted per audio minute based on audio fidelity, speaker density, and timestamp detail. Scope and availability depend on project assessment.',
    availabilityNote: 'Subject to project assessment and qualified language specialist scheduling.',
  },
  {
    id: 'ai-response-evaluation',
    number: '06',
    title: 'AI Response Evaluation',
    shortSummary: 'Reviewing AI-generated responses against project guidelines and rubrics.',
    overview: 'Human evaluation for Reinforcement Learning from Human Feedback (RLHF) and model safety. Human evaluators review, rank, and score model responses for factual accuracy, coherence, helpfulness, tone, safety, and adherence to system prompts.',
    icon: Sparkles,
    imageSrc: '/assets/images/ai_response_evaluation_1793184711172.jpg',
    keyFeatures: [
      'Pairwise Model Output Ranking',
      'Factual Accuracy & Hallucination Flagging',
      'Helpfulness & Safety Rubric Scoring',
      'Multi-Turn Conversational Quality Assessment',
    ],
    workflow: [
      '1. Rubric Ingestion: Review scoring criteria (Helpfulness, Harmlessness, Accuracy).',
      '2. Evaluator Calibration: Benchmark prompt sets scored and reconciled with client guidelines.',
      '3. Response Evaluation: Human evaluators assess model outputs against defined scales.',
      '4. Inter-Rater Reliability: Calculating rater agreement scores and calibrating outliers.',
      '5. Clean Export: Scoring matrices with qualitative rationale and flagged issues.',
    ],
    deliverables: [
      'JSONL reward model scoring datasets',
      'Pairwise preference matrices (Prompt, Chosen, Rejected)',
      'Safety and hallucination incident reports',
    ],
    clientRequirements: [
      'Evaluation rubric and scoring scale definitions',
      'Prompts and candidate model response pairs/triplets',
      'Specific domain criteria (e.g. coding, reasoning, conversational tone)',
    ],
    quoteInformation: 'Quoted per prompt-response pair based on response length and rubric complexity. Scope and availability depend on project assessment.',
    availabilityNote: 'Assigned to qualified evaluators with demonstrated domain proficiency.',
  },
  {
    id: 'search-relevance-evaluation',
    number: '07',
    title: 'Search & Relevance Evaluation',
    shortSummary: 'Evaluating search results, query intent and content relevance.',
    overview: 'Assessing search engine result pages, e-commerce product recommendations, and retrieval-augmented generation (RAG) outputs. Evaluators judge intent alignment, freshness, location relevance, and snippet usefulness.',
    icon: Search,
    imageSrc: '/assets/images/search_relevance_evaluation_1793184711119.jpg',
    keyFeatures: [
      'Query Intent & Keyword Analysis',
      'Search Result Relevance Grading (Navigational, Informational, Transactional)',
      'E-Commerce Product Match Assessment',
      'Snippet & Summary Utility Review',
    ],
    workflow: [
      '1. Guideline Review: Understanding query categories, user intent, and grading levels.',
      '2. Evaluator Training: Benchmark query evaluation and threshold calibration.',
      '3. Search Grading: Evaluators review result lists and assign relevance grades.',
      '4. Quality Lead Review: Second-tier verification of graded items.',
      '5. Output Export: Graded query-result pairs with judgment rationales.',
    ],
    deliverables: [
      'Graded relevance spreadsheets (CSV / JSONL)',
      'Query intent misclassification reports',
    ],
    clientRequirements: [
      'Query list and target landing pages / product results',
      'Relevance grading scale (e.g. Vital, Useful, Relevant, Irrelevant)',
    ],
    quoteInformation: 'Quoted per query-result pair. Scope and availability depend on project assessment.',
    availabilityNote: 'Subject to project assessment and qualified evaluator scheduling.',
  },
  {
    id: 'content-data-review',
    number: '08',
    title: 'Content & Data Review',
    shortSummary: 'Data checking, validation, policy compliance and quality review.',
    overview: 'Systematic audits of existing datasets, vendor submissions, or content databases. We verify label consistency, validate compliance with content policies, detect misclassifications, and generate comprehensive error taxonomies.',
    icon: CheckSquare,
    imageSrc: '/assets/images/content_data_review_1793184711374.jpg',
    keyFeatures: [
      'Third-Party Dataset Verification Audits',
      'Content Moderation & Policy Compliance',
      'Error Taxonomy & Confusion Matrices',
      'Inter-Annotator Agreement (IAA) Benchmarks',
    ],
    workflow: [
      '1. Sample Sizing: Establish statistically representative sampling (5–10% or full audit).',
      '2. Criteria Calibration: Review client standards and acceptance thresholds.',
      '3. Multi-Pass Review: Senior quality leads inspect coordinate fits and labels.',
      '4. Agreement Calculation: Calculating Cohen’s Kappa and IoU metrics.',
      '5. Report & Remediation: Delivering flagged error logs and remediated files.',
    ],
    deliverables: [
      'Comprehensive Quality Audit Report (PDF / Markdown / CSV)',
      'Error taxonomy breakdown with corrective recommendations',
      'Cleaned and remediated dataset files',
    ],
    clientRequirements: [
      'Dataset files and original annotation guidelines',
      'Acceptance thresholds (e.g. minimum IoU or accuracy benchmark)',
    ],
    quoteInformation: 'Quoted either as a fixed sample audit fee or per-item remediation rate. Scope and availability depend on project assessment.',
    availabilityNote: 'Scheduled based on audit scope and current review capacity.',
  },
  {
    id: 'lidar-3d-other-operations',
    number: '09',
    title: 'LiDAR, 3D & Custom Operations',
    shortSummary: 'Point-cloud, 3D annotation and custom tasks based on workforce capabilities.',
    overview: 'Specialized spatial annotation for autonomous perception and custom digital operations. We annotate 3D bounding cuboids in dense point clouds, correlate spatial coordinates with camera feeds, and support bespoke client tool pipelines.',
    icon: Layers,
    imageSrc: '/assets/images/lidar_pointcloud_preview_1793168819956.jpg',
    badge: 'Subject to project availability',
    keyFeatures: [
      '3D Bounding Cuboid Fitting (x, y, z, l, w, h, yaw)',
      '3D Semantic Point Segmentation',
      'LiDAR & Camera Sensor Fusion Alignment',
      'Custom Tool Integration (Client Proprietary Tools)',
    ],
    workflow: [
      '1. Sensor Coordinate Calibration: Confirm coordinate frames and sensor calibration.',
      '2. Tool Pipeline Setup: Configure client tool interfaces or proprietary labeling platforms.',
      '3. 3D Cuboid Fitting: Fit 7-DOF/9-DOF boxes to objects in spatial point clouds.',
      '4. Multi-Sensor Cross-Check: Cross-verify 3D projections against 2D camera feeds.',
      '5. Geometric Tolerance QA: Ensure yaw orientation and dimensions match real objects.',
    ],
    deliverables: [
      'Annotated 3D bounding cuboids in PCD, BIN, or LAS formats',
      'Semantic point-cloud classification labels',
      'Custom schema JSON manifests',
    ],
    clientRequirements: [
      'Calibrated point cloud data and extrinsic/intrinsic camera matrices',
      'Access to client tool platform or workstation specifications',
      'Object class guidelines and minimum point density rules',
    ],
    quoteInformation: 'LiDAR annotation requires specialized workstation tooling and spatial technicians. Scope, timeline, and availability depend on project assessment.',
    availabilityNote: 'Projects accepted strictly subject to specialized tool pipeline compatibility and confirmed technician availability.',
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectService,
  activeServiceSlug,
  onCloseServiceSlug 
}) => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  // If activeServiceSlug is passed from URL hash, open that modal
  React.useEffect(() => {
    if (activeServiceSlug) {
      const found = servicesData.find((s) => s.id === activeServiceSlug);
      if (found) {
        setSelectedService(found);
      }
    }
  }, [activeServiceSlug]);

  const handleCloseModal = () => {
    setSelectedService(null);
    if (onCloseServiceSlug) {
      onCloseServiceSlug();
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
              Capabilities & Offerings
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-950">
              Reliable AI Data Operations & Managed Services
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Human-led precision across computer vision, NLP, speech, search evaluation, and structured digital operations. Managed by experienced project coordinators.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-medium shrink-0">
            <span>9 Specialized Capabilities</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>Managed Remote Operations</span>
          </div>
        </div>

        {/* Clear Availability Disclaimer */}
        <div className="mt-8 p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-700 leading-relaxed">
            <strong className="text-slate-900 font-semibold">Service Availability Notice: </strong>
            To maintain high quality standards, every project is evaluated before kickoff. Service availability, team allocation, and turnaround schedules depend on specific project guidelines, required tool pipelines, and qualified contributor availability.
          </p>
        </div>

        {/* 9 Services Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Card Visual if present */}
                  {service.imageSrc && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900 border-b border-slate-100">
                      <img
                        src={service.imageSrc}
                        alt={`${service.title} preview`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      <div className="absolute bottom-2.5 left-3 text-[11px] font-mono text-white/90">
                        {service.title} Pipeline
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    {/* Header Row: Editorial Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-mono font-bold text-blue-600">
                        {service.number}.
                      </span>
                      <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug">
                      {service.title}
                    </h3>

                    {/* Conditional Badge */}
                    {service.badge && (
                      <div className="mt-1.5 text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded inline-block">
                        {service.badge}
                      </div>
                    )}

                    {/* Short Summary */}
                    <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                      {service.shortSummary}
                    </p>

                    {/* Key Features / Highlights */}
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Scope Highlights
                      </div>
                      {service.keyFeatures.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="px-6 pb-6 pt-3 bg-white border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Discuss This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Call-to-Action Card */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-8 sm:p-10 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 mb-2">
              Ready to Kick Off a Dataset or Annotation Project?
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Need a Custom Data Pipeline or Pilot Batch?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              We review your guideline rubrics, evaluate task complexity, and conduct an initial calibration batch before scaling to full volume.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={() => onSelectService('General Project Inquiry')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <span>Discuss a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Comprehensive Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-150">
            
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-600 mb-1">
              <span>SERVICE SPECIFICATION</span>
              <span>·</span>
              <span>{selectedService.number}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
              {selectedService.title}
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {selectedService.overview}
            </p>

            {/* Availability Callout */}
            <div className="mt-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-900 font-semibold">Scope & Availability: </strong>
                {selectedService.availabilityNote}
              </p>
            </div>

            {/* Step-by-Step Workflow */}
            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Service Workflow Process</span>
              </h4>
              <div className="space-y-2 bg-slate-50/60 p-4 rounded-xl border border-slate-100">
                {selectedService.workflow.map((step, idx) => (
                  <div key={idx} className="text-xs text-slate-700 leading-relaxed">
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                <Package className="w-4 h-4 text-indigo-600" />
                <span>Standard Deliverable Formats</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.deliverables.map((deliv, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60 flex items-start gap-2 text-xs text-slate-800">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Requirements */}
            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-violet-600" />
                <span>What We Need From You</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600 pl-1">
                {selectedService.clientRequirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">›</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote Information */}
            <div className="mt-6 p-4 rounded-xl bg-blue-50/70 border border-blue-200/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-1">
                Quote & Proposal Assessment
              </h4>
              <p className="text-xs text-blue-900/80 leading-relaxed">
                {selectedService.quoteInformation}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Close Specification
              </button>

              <button
                onClick={() => {
                  const serviceTitle = selectedService.title;
                  handleCloseModal();
                  onSelectService(serviceTitle);
                }}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-lg shadow-sm transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Discuss This Service</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
