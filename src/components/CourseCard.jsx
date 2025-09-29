@@ .. @@
                                      <button
                                          className={`font-medium transition-colors ${
                                              course.theme === "blue"
                                                  ? "text-blue-600 hover:text-blue-800"
                                                  : "text-indigo-600 hover:text-indigo-800"
                                          }`}
+                                         onClick={() => {
+                                              // TODO: Navigate to course details
+                                              console.log('View details clicked for:', course.title);
+                                         }}
                                      >
                                           View Details →
                                      </button>
                                      <button
                                          className="px-6 py-2 rounded-lg font-medium text-white
                                                       bg-gradient-to-r from-orange-500 to-orange-600
                                                       hover:from-orange-600 hover:to-orange-700
                                                       shadow-md hover:shadow-lg transition"
+                                         onClick={() => {
+                                              // TODO: Implement subscription logic
+                                              console.log('Subscribe clicked for:', course.title);
+                                         }}
                                      >
                                           Subscribe
                                      </button>