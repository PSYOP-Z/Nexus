import type { KnowledgeGraph } from '../core/graph/types.js';
import { CommunityDetectionResult } from '../core/ingestion/community-processor.js';
import { ProcessDetectionResult } from '../core/ingestion/process-processor.js';

/** Per-extension breakdown of unsupported files */
export interface UnsupportedExtension {
  extension: string;
  count: number;
}

/** Parser coverage stats — tracks which files were parsed vs skipped */
export interface ParserCoverage {
  /** Total source files in repo (before language filtering) */
  totalFiles: number;
  /** Files with supported extensions that entered the parse pipeline */
  supportedFiles: number;
  /** Files with unsupported extensions (no grammar defined) */
  unsupportedFiles: number;
  /** Per-extension breakdown of unsupported files, sorted by count desc */
  unsupportedByExtension: UnsupportedExtension[];
}

// CLI-specific: in-memory result with graph + detection results
export interface PipelineResult {
  graph: KnowledgeGraph;
  /** Absolute path to the repo root — used for lazy file reads during LadybugDB loading */
  repoPath: string;
  /** Total files scanned (for stats) */
  totalFileCount: number;
  communityResult?: CommunityDetectionResult;
  processResult?: ProcessDetectionResult;
  /**
   * True if the parse phase spawned a worker pool for this run. False means
   * the sequential fallback handled every chunk. Primarily a test affordance
   * so regression suites can prove which path executed.
   */
  usedWorkerPool: boolean;
  /** Parser coverage stats — which files were parsed vs skipped */
  parserCoverage?: ParserCoverage;
}
