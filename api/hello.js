module.exports = (req, res) => {
	res.status(200).json({
		message: process.env.TEST_MESSAGE || "TEST_MESSAGE not set — add it in Project Settings > Environment Variables",
		region: process.env.VERCEL_REGION || "unknown",
		deployedAt: new Date().toISOString(),
	});
};
