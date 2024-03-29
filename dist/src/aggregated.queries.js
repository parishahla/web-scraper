import Info from "../model/info.schema.js";
export const WEBSITES_PER_CITY_HANLDER = async (request, reply) => {
    //! req.params
    const city = request.params;
    const res = await Info.aggregate([
        { $match: { city: Object.values(city)[0] } },
        { $group: { _id: { domain: "domain" }, totalDomains: { $sum: 1 } } },
    ]);
    reply.send({ res });
};
export const FILTER_STAR_RANKING_HANDLER = async (request, reply) => {
    const res = await Info.aggregate([
        { $group: { _id: "$stars", websites: { $push: "$$ROOT" } } },
    ]);
    reply.send({ res });
};
