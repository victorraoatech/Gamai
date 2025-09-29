@@ .. @@
                                           <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                                                <ActionButtonOrange
                                                     icon={
                                                          <CreditCard className="w-4 md:w-5 h-4 md:h-5" />
                                                     }
                                                     text="Subscribe Now"
+                                                    onClick={() => {
+                                                         // TODO: Implement subscription logic
+                                                         console.log('Subscribe clicked for:', subCourse.title);
+                                                    }}
                                                />
                                                <ActionButtonYellow
                                                     icon={<Eye className="w-4 md:w-5 h-4 md:h-5" />}
                                                     text="View Curriculum"
+                                                    onClick={() => {
+                                                         // TODO: Implement curriculum view logic
+                                                         console.log('View curriculum clicked for:', subCourse.title);
+                                                    }}
                                                />
                                           </div>
                                      </div>
@@ .. @@
-const ActionButtonOrange = ({ icon, text }) => (
-    <button className="flex-1 flex items-center justify-center gap-2 py-2 md:py-3 px-3 md:px-5 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md hover:shadow-lg transition text-sm md:text-base">
+const ActionButtonOrange = ({ icon, text, onClick }) => (
+    <button 
+        onClick={onClick}
+        className="flex-1 flex items-center justify-center gap-2 py-2 md:py-3 px-3 md:px-5 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md hover:shadow-lg transition text-sm md:text-base"
+    >
         {icon} {text}
     </button>
 );

-const ActionButtonYellow = ({ icon, text }) => (
-    <button className="flex-1 flex items-center justify-center gap-2 py-2 md:py-3 px-3 md:px-5 rounded-xl font-semibold text-white bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 shadow-md hover:shadow-lg transition text-sm md:text-base">
+const ActionButtonYellow = ({ icon, text, onClick }) => (
+    <button 
+        onClick={onClick}
+        className="flex-1 flex items-center justify-center gap-2 py-2 md:py-3 px-3 md:px-5 rounded-xl font-semibold text-white bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 shadow-md hover:shadow-lg transition text-sm md:text-base"
+    >
         {icon} {text}
     </button>
 );