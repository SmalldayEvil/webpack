/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */

/**
 * Modules that should be shared in the share scope. When provided, property names are used to match requested modules in this compilation.
 */
export type Shared = (SharedItem | SharedObject)[] | SharedObject;
/**
 * A module that should be shared in the share scope.
 */
export type SharedItem = string;
/**
 * This interface was referenced by `SharePluginOptions`'s JSON-Schema
 * via the `definition` "SharedVersionArray".
 */
export type SharedVersionArray = (number | string)[];

/**
 * Options for shared modules.
 */
export interface SharePluginOptions {
	/**
	 * Share scope name used for all shared modules (defaults to 'default').
	 */
	shareScope?: string;
	/**
	 * Modules that should be shared in the share scope. When provided, property names are used to match requested modules in this compilation.
	 */
	shared?: Shared;
}
/**
 * Modules that should be shared in the share scope. Property names are used to match requested modules in this compilation. Relative requests are resolved, module requests are matched unresolved, absolute paths will match resolved requests. A trailing slash will match all requests with this prefix. In this case shareKey must also have a trailing slash.
 */
export interface SharedObject {
	/**
	 * Modules that should be shared in the share scope.
	 */
	[k: string]: SharedConfig | SharedItem;
}
/**
 * Advanced configuration for modules that should be shared in the share scope.
 */
export interface SharedConfig {
	/**
	 * Provided module that should be provided to share scope. Also acts as fallback module if no shared module is found in share scope or version isn't valid. Defaults to the property name.
	 */
	import?: false | SharedItem;
	/**
	 * Version requirement from module in share scope.
	 */
	requiredVersion?: string | SharedVersionArray;
	/**
	 * Module is looked up under this key from the share scope.
	 */
	shareKey?: string;
	/**
	 * Share scope name.
	 */
	shareScope?: string;
	/**
	 * Do not accept shared module if version is not valid (defaults to yes, if local fallback module is available, otherwise no, has no effect if there is not valid version specified).
	 */
	strictVersion?: boolean;
	/**
	 * Version of the provided module.
	 */
	version?: string | SharedVersionArray;
}
