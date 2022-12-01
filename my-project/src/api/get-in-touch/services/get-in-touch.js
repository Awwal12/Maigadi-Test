'use strict';

/**
 * get-in-touch service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::get-in-touch.get-in-touch');
